const ADMIN_STORAGE_KEY = 'maiShoesAjustesProductos';
const adminLogin = document.getElementById('adminLogin');
const adminPanel = document.getElementById('adminPanel');
const adminProductos = document.getElementById('adminProductos');
const adminMessage = document.getElementById('adminMessage');
let credenciales = null;

function leerAjustes() {
  try {
    const ajustes = JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY) || '{}');
    return ajustes && typeof ajustes === 'object' ? ajustes : {};
  } catch (error) {
    return {};
  }
}

function opcionesMarcadas(items, seleccionados, nombre) {
  return items.map((item) => `<label><input type="checkbox" name="${nombre}" value="${item}" ${seleccionados.includes(item) ? 'checked' : ''} /> ${item}</label>`).join('');
}

function renderAdministracion() {
  const ajustes = leerAjustes();
  adminProductos.innerHTML = window.catalogoBase.map((producto) => {
    const ajuste = ajustes[producto.id] || {};
    const colores = Array.isArray(ajuste.colores) ? ajuste.colores : producto.colores.map((color) => color.nombre);
    const tallas = Array.isArray(ajuste.tallas) ? ajuste.tallas : producto.tallas;
    return `<form class="admin-product" data-id="${producto.id}">
      <div class="admin-product-title"><h2>${producto.nombre}</h2><label><input type="checkbox" name="disponible" ${ajuste.disponible !== false ? 'checked' : ''} /> Disponible</label></div>
      <div class="admin-product-grid">
        <label class="admin-field">Precio BCV<input name="precio" type="number" min="0" step="0.01" value="${ajuste.precio ?? producto.precio}" required /></label>
        <label class="admin-field">Precio USDT<input name="precioDescuento" type="number" min="0" step="0.01" value="${ajuste.precioDescuento ?? producto.precioDescuento ?? producto.precio}" required /></label>
        <div class="admin-options"><strong>Colores disponibles</strong><div class="admin-checks">${opcionesMarcadas(producto.colores.map((color) => color.nombre), colores, 'colores')}</div></div>
        <div class="admin-options"><strong>Tallas disponibles</strong><div class="admin-checks">${opcionesMarcadas(producto.tallas, tallas, 'tallas')}</div></div>
      </div>
      <div class="admin-actions"><button class="admin-reset" type="button">Restablecer</button><button class="admin-save" type="submit">Guardar y publicar</button></div>
    </form>`;
  }).join('');
}

async function llamarApi(body) {
  const response = await fetch('/api/publicar-productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const resultado = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(resultado.error || 'No se pudo completar la operación.');
  return resultado;
}

function mostrarPanel() {
  adminLogin.hidden = true;
  adminPanel.hidden = false;
  renderAdministracion();
}

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const user = document.getElementById('adminUser').value.trim();
  const password = document.getElementById('adminPassword').value;
  const error = document.getElementById('loginError');
  error.textContent = 'Comprobando acceso...';
  try {
    await llamarApi({ action: 'login', user, password });
    credenciales = { user, password };
    error.textContent = '';
    mostrarPanel();
  } catch (apiError) {
    error.textContent = apiError.message;
  }
});

document.getElementById('logoutButton').addEventListener('click', () => {
  credenciales = null;
  adminPanel.hidden = true;
  adminLogin.hidden = false;
});

adminProductos.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const ajustes = leerAjustes();
  ajustes[form.dataset.id] = {
    disponible: form.elements.disponible.checked,
    precio: Number(form.elements.precio.value),
    precioDescuento: Number(form.elements.precioDescuento.value),
    colores: [...form.querySelectorAll('input[name="colores"]:checked')].map((input) => input.value),
    tallas: [...form.querySelectorAll('input[name="tallas"]:checked')].map((input) => input.value)
  };
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(ajustes));
  adminMessage.textContent = 'Publicando cambios...';
  try {
    const resultado = await llamarApi({ action: 'publish', ...credenciales, ajustes });
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    adminMessage.textContent = resultado.message || 'Cambios publicados correctamente.';
  } catch (apiError) {
    adminMessage.textContent = `Guardado local. No se publicó: ${apiError.message}`;
  }
});

adminProductos.addEventListener('click', (event) => {
  const button = event.target.closest('.admin-reset');
  if (!button) return;
  const form = button.closest('.admin-product');
  const ajustes = { ...window.productosConfig, ...leerAjustes() };
  delete ajustes[form.dataset.id];
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(ajustes));
  adminMessage.textContent = 'Publicando restablecimiento...';
  llamarApi({ action: 'publish', ...credenciales, ajustes })
    .then((resultado) => {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      adminMessage.textContent = resultado.message || 'Producto restablecido y publicado.';
      renderAdministracion();
    })
    .catch((error) => {
      adminMessage.textContent = `Restablecimiento local. No se publicó: ${error.message}`;
    });
});