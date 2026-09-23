const STORAGE_KEY = 'simulacionCalzados';
const NEW_SELECTION_KEY = 'simulacionNuevaSeleccion';

const catalogoOrdenado = [...window.catalogo].sort((a, b) => {
  if (a.nuevo !== b.nuevo) {
    return a.nuevo ? -1 : 1;
  }

  return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
});

const getSavedSelection = () => {
  try {
    const guardados = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
    const idsUnicos = Array.isArray(guardados) ? guardados : [];
    return [...new Set(idsUnicos)];
  } catch (error) {
    return [];
  }
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

const formatUsdt = (value) =>
  `${new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)} USDT`;

const normalizeSearchText = (value) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const contenedor = document.getElementById('catalogo');
const total = document.getElementById('totalProductos');
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.value = '';
}
const simulacionLista = document.getElementById('simulacionLista');
const simulacionVacia = document.getElementById('simulacionVacia');
const precioBvc = document.getElementById('precioBvc');
const reservaBcv = document.getElementById('reservaBcv');
const monedaSimulacion = document.getElementById('monedaSimulacion');
const monedaTotalLabel = document.getElementById('monedaTotalLabel');
const simulatorCard = document.getElementById('simulatorCard');
const simulatorToggle = document.getElementById('simulatorToggle');
const comprarPedido = document.getElementById('consultarPedido');
const compraPedidoError = document.getElementById('consultaPedidoError');

if (simulatorCard && sessionStorage.getItem(NEW_SELECTION_KEY) === 'true') {
  simulatorCard.classList.add('has-new-selection');
}

let monedaSeleccionada = localStorage.getItem('monedaSimulacion') || 'bcv';
if (monedaSimulacion) monedaSimulacion.value = monedaSeleccionada;

const seleccion = new Map();
getSavedSelection().forEach((guardado) => {
  const id = typeof guardado === 'string' ? guardado : guardado?.id;
  const item = catalogoOrdenado.find((producto) => producto.id === id);
  if (item) seleccion.set(item.id, { ...item, variante: typeof guardado === 'object' ? guardado : null });
});

let modeloSeleccionadoId = getSavedSelection()[0] || catalogoOrdenado[0]?.id || null;

function guardarSeleccion() {
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      [...seleccion.values()].map((item) =>
        item.variante
          ? { id: item.id, talla: item.variante.talla, color: item.variante.color, imagen: item.variante.imagen }
          : item.id
      )
    )
  );
}

function guardarSimulacionAntesDeAbrirProducto() {
  localStorage.setItem(
    'simulacionAntesProducto',
    JSON.stringify(
      [...seleccion.values()].map((item) =>
        item.variante
          ? { id: item.id, talla: item.variante.talla, color: item.variante.color, imagen: item.variante.imagen }
          : item.id
      )
    )
  );
}

function renderSimulador() {
  const itemsSeleccionados = [...seleccion.values()];

  const totalBcv = itemsSeleccionados.reduce((sum, item) => sum + item.precio, 0);
  const totalDivisa = itemsSeleccionados.reduce(
    (sum, item) => sum + (item.precioDescuento ?? item.precio),
    0
  );
  const reservaTotalBcv = totalBcv * 0.2;
  const reservaTotalDivisa = totalDivisa * 0.2;

  const mostrarBcv = monedaSeleccionada === 'bcv';
  const formatoPrecio = mostrarBcv ? formatCurrency : formatUsdt;
  const totalMostrado = mostrarBcv ? totalBcv : totalDivisa;
  const reservaMostrada = mostrarBcv ? reservaTotalBcv : reservaTotalDivisa;
  if (monedaTotalLabel) monedaTotalLabel.textContent = `Total ${mostrarBcv ? 'BCV' : 'USDT'}`;
  if (precioBvc) precioBvc.textContent = formatoPrecio(totalMostrado);
  if (reservaBcv) reservaBcv.textContent = formatoPrecio(reservaMostrada);

  if (!simulacionLista || !simulacionVacia) return;

  if (!itemsSeleccionados.length) {
    simulacionVacia.style.display = 'block';
    simulacionLista.innerHTML = '';
    const formatoVacio = monedaSeleccionada === 'bcv' ? formatCurrency : formatUsdt;
    if (precioBvc) precioBvc.textContent = formatoVacio(0);
    if (reservaBcv) reservaBcv.textContent = formatoVacio(0);
    return;
  }

  simulacionVacia.style.display = 'none';
  simulacionLista.innerHTML = itemsSeleccionados
    .map(
      (item) => `
        <div class="sim-item">
          <a class="sim-item-image-link" href="producto.html?id=${item.id}&return=simulacion" aria-label="Elegir talla y color de ${item.nombre}">
            <img src="${item.variante?.imagen || item.imagenes[0]}" alt="Elegir talla y color de ${item.nombre}" loading="lazy" />
          </a>
          <div class="sim-item-copy">
            <strong>${item.nombre}</strong>
            ${item.variante ? `<span class="sim-item-variant">Talla ${item.variante.talla} · ${item.variante.color}</span>` : ''}
            <div class="sim-item-prices">
              <span class="sim-bcv">${formatCurrency(item.precio)}</span>
              <span class="sim-divisa">${formatUsdt(item.precioDescuento ?? item.precio)}</span>
            </div>
          </div>
          <button type="button" class="sim-remove" data-id="${item.id}" aria-label="Quitar ${item.nombre}">Quitar</button>
        </div>
      `
    )
    .join('');

  simulacionLista.querySelectorAll('.sim-remove').forEach((button) => {
    button.addEventListener('click', () => {
      seleccion.delete(button.dataset.id);
      guardarSeleccion();
      renderCatalogo();
      renderSimulador();
    });
  });

  simulacionLista.querySelectorAll('.sim-item-image-link').forEach((link) => {
    link.addEventListener('click', guardarSimulacionAntesDeAbrirProducto);
  });
}

if (monedaSimulacion) {
  monedaSimulacion.addEventListener('change', () => {
    monedaSeleccionada = monedaSimulacion.value;
    localStorage.setItem('monedaSimulacion', monedaSeleccionada);
    renderSimulador();
  });
}

if (simulatorToggle && simulatorCard) {
  simulatorToggle.addEventListener('click', () => {
    const abierta = simulatorCard.classList.toggle('is-open');
    simulatorToggle.setAttribute('aria-expanded', String(abierta));
    if (abierta) {
      simulatorCard.classList.remove('has-new-selection');
      sessionStorage.removeItem(NEW_SELECTION_KEY);
    }
  });
}

function renderCatalogo(items = catalogoOrdenado) {
  if (!contenedor || !total) return;

  const query = normalizeSearchText(searchInput?.value.trim() || '');
  const productosFiltrados = query
    ? items.filter((item) => normalizeSearchText(item.nombre).includes(query))
    : items;

  total.textContent = `${productosFiltrados.length} artículos`;
  contenedor.innerHTML = productosFiltrados
    .map((item) => {
      const precioFinal = item.precioDescuento ?? item.precio;
      const colores = item.colores
        .map(
          (color) => `
            <div class="color-pill" title="${color.nombre}">
              <span class="color-dot" style="background:${color.hex};"></span>
              <span>${color.nombre}</span>
            </div>
          `
        )
        .join('');

      const seleccionado = seleccion.has(item.id);
      const badgeNuevo = item.nuevo ? `<span class="new-badge">Nuevo</span>` : '';
      const badgeDisponibilidad = item.disponible
        ? '<span class="availability-badge available">Disponible</span>'
        : '<span class="availability-badge unavailable">No disponible</span>';
      const tallas = item.tallas.length
        ? item.tallas.map((talla) => `<span class="talla-chip">${talla}</span>`).join('')
        : '<span class="variant-empty">Sin tallas disponibles</span>';

      return `
        <article class="select-card ${item.id === modeloSeleccionadoId ? 'active' : ''}">
          <img src="${item.imagenes[0]}" alt="${item.nombre}" loading="lazy" />
          <div class="content">
            <div class="card-header-row">
              <h2 class="name">${item.nombre}</h2>
              <div class="card-badges">${badgeNuevo}${badgeDisponibilidad}</div>
            </div>

            <div class="meta">
              <div class="price-stack">
                <span class="price-old">${formatCurrency(item.precio)}</span>
                <span class="price-discount">${formatUsdt(precioFinal)}</span>
              </div>
            </div>

            <div class="info-block">
              <p class="info-label">Colores disponibles</p>
              <div class="color-list">${colores || '<span class="variant-empty">Sin colores disponibles</span>'}</div>
            </div>

            <div class="info-block">
              <p class="info-label">Tallas disponibles</p>
              <div class="talla-list">${tallas}</div>
            </div>

            <div class="card-actions">
              <button class="select-button ${seleccionado ? 'selected' : ''}" type="button" data-id="${item.id}" ${!item.disponible || !item.colores.length || !item.tallas.length ? 'disabled' : ''}>
                ${seleccionado ? 'Seleccionado' : 'Seleccionar'}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  contenedor.querySelectorAll('.select-button').forEach((button) => {
    button.addEventListener('click', () => {
      const producto = catalogoOrdenado.find((item) => item.id === button.dataset.id);
      if (!producto || !producto.disponible || !producto.colores.length || !producto.tallas.length) return;

      if (seleccion.has(producto.id)) {
        seleccion.delete(producto.id);
      } else {
        seleccion.set(producto.id, producto);
      }

      guardarSeleccion();
      renderCatalogo();
      renderSimulador();
      if (seleccion.has(producto.id)) {
        simulatorCard?.classList.add('has-new-selection');
        sessionStorage.setItem(NEW_SELECTION_KEY, 'true');
      }
    });
  });

  contenedor.querySelectorAll('.select-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.select-button')) {
        return;
      }
      const id = card.querySelector('.select-button')?.dataset.id;
      if (!id) return;
      modeloSeleccionadoId = id;
      const vieneDeSimulacion = seleccion.has(id);
      if (vieneDeSimulacion) guardarSimulacionAntesDeAbrirProducto();
      window.location.href = `producto.html?id=${id}${vieneDeSimulacion ? '&return=simulacion' : ''}`;
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    renderCatalogo(catalogoOrdenado);
  });
}

if (comprarPedido) {
  comprarPedido.addEventListener('click', () => {
    const productosSeleccionados = [...seleccion.values()];
    const productosIncompletos = productosSeleccionados.filter((item) =>
      !item.variante?.color || !item.variante?.talla
    );
    const simulacionCompleta = productosSeleccionados.length > 0 && productosIncompletos.length === 0;

    if (!simulacionCompleta) {
      if (compraPedidoError) {
        compraPedidoError.textContent = productosIncompletos.length
          ? `Completa talla y color de: ${productosIncompletos.map((item) => item.nombre).join(', ')}.`
          : 'Agrega al menos un calzado a la simulación.';
      }
      return;
    }

    if (compraPedidoError) compraPedidoError.textContent = '';
    window.location.href = 'datos-pedido.html';
  });
}

if (window.location.hash === '#simulacion' && simulatorCard) {
  simulatorCard.classList.add('is-open');
  simulatorToggle?.setAttribute('aria-expanded', 'true');
  window.requestAnimationFrame(() => simulatorCard.scrollIntoView({ behavior: 'smooth', block: 'center' }));
}

renderCatalogo();
renderSimulador();
