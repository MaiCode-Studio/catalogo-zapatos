const GITHUB_API = 'https://api.github.com';

function responder(res, status, body) {
  res.status(status).json(body);
}

function ajustesValidos(ajustes) {
  if (!ajustes || typeof ajustes !== 'object' || Array.isArray(ajustes)) return false;
  return Object.values(ajustes).every((producto) => {
    if (!producto || typeof producto !== 'object') return false;
    if (typeof producto.disponible !== 'boolean') return false;
    if (!Number.isFinite(producto.precio) || producto.precio < 0) return false;
    if (!Number.isFinite(producto.precioDescuento) || producto.precioDescuento < 0) return false;
    return Array.isArray(producto.colores) && Array.isArray(producto.tallas);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return responder(res, 405, { error: 'Método no permitido.' });

  const { action, user, password, ajustes } = req.body || {};
  if (user !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASSWORD) {
    return responder(res, 401, { error: 'Usuario o contraseña incorrectos.' });
  }
  if (action === 'login') return responder(res, 200, { ok: true });
  if (action !== 'publish' || !ajustesValidos(ajustes)) {
    return responder(res, 400, { error: 'Los datos de productos no son válidos.' });
  }

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const path = process.env.GITHUB_CONFIG_PATH || 'productos-config.js';
  if (!token || !owner || !repo) {
    return responder(res, 500, { error: 'Faltan variables de configuración de GitHub en Vercel.' });
  }

  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28'
  };
  const fileUrl = `${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`;
  try {
    const fileResponse = await fetch(`${fileUrl}?ref=${encodeURIComponent(branch)}`, { headers });
    if (!fileResponse.ok) return responder(res, 502, { error: 'No se pudo consultar el archivo en GitHub.' });

    const file = await fileResponse.json();
    const contenido = `window.productosConfig = ${JSON.stringify(ajustes, null, 2)};\n`;
    const updateResponse = await fetch(fileUrl, {
      method: 'PUT',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Actualizar productos desde el panel administrativo',
        content: Buffer.from(contenido, 'utf8').toString('base64'),
        sha: file.sha,
        branch
      })
    });
    if (!updateResponse.ok) return responder(res, 502, { error: 'GitHub no pudo guardar la actualización.' });

    return responder(res, 200, { ok: true, message: 'Cambios publicados. Vercel iniciará el despliegue.' });
  } catch (error) {
    return responder(res, 502, { error: 'No fue posible conectar con GitHub.' });
  }
};