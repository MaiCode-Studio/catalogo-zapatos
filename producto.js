const product = window.catalogo.find((item) => item.id === new URLSearchParams(window.location.search).get('id'));

const mainImage = document.getElementById('mainImage');
const gallery = document.getElementById('gallery');
const nombre = document.getElementById('productoNombre');
const precio = document.getElementById('productoPrecio');
const descripcion = document.getElementById('productoDescripcion');
const detalle = document.getElementById('productoDetalle');
const colores = document.getElementById('colores');
const colorInfo = document.getElementById('colorInfo');
const tallas = document.getElementById('tallas');
const tallaInfo = document.getElementById('tallaInfo');
const volverProducto = document.getElementById('volverProducto');
const estadoDisponibilidad = document.getElementById('estadoDisponibilidad');

if (!product) {
  document.body.innerHTML = `
    <div class="not-found">
      <h1>Producto no encontrado</h1>
      <a href="catalogo.html" class="button secondary">Volver al catálogo</a>
    </div>
  `;
} else {
  const storageKey = 'simulacionCalzados';
  const backupKey = 'simulacionAntesProducto';
  const vieneDeSimulacion = new URLSearchParams(window.location.search).get('return') === 'simulacion';
  let guardados = [];
  try {
    guardados = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
  } catch (error) {
    guardados = [];
  }
  if (vieneDeSimulacion) {
    try {
      const simulacionRespaldada = JSON.parse(localStorage.getItem(backupKey) || '[]');
      if (Array.isArray(simulacionRespaldada) && simulacionRespaldada.length) {
        guardados = simulacionRespaldada;
      }
    } catch (error) {
    }
  }
  const varianteGuardada = Array.isArray(guardados)
    ? guardados.find((item) => typeof item === 'object' && item?.id === product.id)
    : null;
  let colorActual = product.colores.find((color) => color.nombre === varianteGuardada?.color) || product.colores[0] || null;
  let tallaActual = product.tallas.includes(varianteGuardada?.talla) ? varianteGuardada.talla : null;
  const puedeComprar = product.disponible && product.colores.length > 0 && product.tallas.length > 0;

  if (new URLSearchParams(window.location.search).get('return') === 'simulacion' && volverProducto) {
    volverProducto.href = 'catalogo.html#simulacion';
    volverProducto.innerHTML = '<span class="back-arrow" aria-hidden="true">←</span> Volver a la simulación';
  }

  function actualizarInfoSeleccion() {
    colorInfo.textContent = colorActual ? `Color seleccionado: ${colorActual.nombre}` : 'Sin colores disponibles';
    tallaInfo.textContent = tallaActual ? `Talla seleccionada: ${tallaActual}` : product.tallas.length ? 'Selecciona una talla' : 'Sin tallas disponibles';
  }

  function actualizarImagenPrincipal(src) {
    mainImage.src = src || product.imagenes[0];
    mainImage.alt = colorActual ? `${product.nombre} - ${colorActual.nombre}` : product.nombre;
  }

  function renderGaleria() {
    gallery.innerHTML = product.imagenes
      .map(
        (imagen, index) => `
          <button class="thumb ${index === 0 ? 'active' : ''}" type="button" data-image="${imagen}">
            <img src="${imagen}" alt="${product.nombre} vista ${index + 1}" loading="lazy" />
          </button>
        `
      )
      .join('');

    gallery.querySelectorAll('.thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.thumb').forEach((btn) => btn.classList.remove('active'));
        thumb.classList.add('active');
        actualizarImagenPrincipal(thumb.dataset.image);
      });
    });
  }

  function renderColores() {
    colores.innerHTML = product.colores
      .map(
        (color) => `
          <button
            class="swatch ${color === colorActual ? 'active' : ''}"
            type="button"
            data-color="${color.nombre}"
            data-image="${color.imagen}"
            title="${color.nombre}"
            style="background: ${color.hex};"
          ></button>
        `
      )
      .join('');

    colores.querySelectorAll('.swatch').forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const colorSeleccionado = product.colores.find((item) => item.nombre === swatch.dataset.color);
        if (!colorSeleccionado) return;

        colorActual = colorSeleccionado;
        actualizarImagenPrincipal(colorSeleccionado.imagen);
        renderColores();
        actualizarInfoSeleccion();
      });
    });
  }

  function renderTallas() {
    tallas.innerHTML = product.tallas
      .map((talla) => `
        <button class="size-option ${talla === tallaActual ? 'active' : ''}" type="button" data-size="${talla}">
          ${talla}
        </button>
      `)
      .join('');

    tallas.querySelectorAll('.size-option').forEach((size) => {
      size.addEventListener('click', () => {
        tallaActual = size.dataset.size;
        renderTallas();
        actualizarInfoSeleccion();
      });
    });
  }

  nombre.textContent = product.nombre;
  const precioFinal = product.precioDescuento ?? product.precio;
  precio.innerHTML = `
    <span class="price-item price-bcv">
      <small>Precio BCV</small>
      <strong>$${product.precio.toFixed(2)}</strong>
    </span>
    <span class="price-item price-divisa">
      <small>Precio USDT</small>
      <strong>${precioFinal.toFixed(2)} USDT</strong>
    </span>
  `;
  descripcion.textContent = product.descripcion;
  detalle.textContent = product.detalle;

  if (estadoDisponibilidad) {
    estadoDisponibilidad.textContent = product.disponible ? 'Disponible' : 'No disponible';
    estadoDisponibilidad.classList.toggle('unavailable', !product.disponible);
  }
  actualizarImagenPrincipal(colorActual?.imagen);
  renderGaleria();
  renderColores();
  renderTallas();
  actualizarInfoSeleccion();

  const botonCompra = document.getElementById('botonCompra');
  const newSelectionKey = 'simulacionNuevaSeleccion';

  function actualizarEstadoBoton() {
    let guardados;
    try {
      guardados = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
    } catch (error) {
      guardados = [];
    }
    const seleccionado = Array.isArray(guardados) && guardados.some((item) =>
      typeof item === 'string' ? item === product.id : item?.id === product.id
    );
    botonCompra.classList.toggle('selected', seleccionado);
    botonCompra.textContent = seleccionado ? 'Agregado a la simulación' : 'Agregar a la simulación';
  }

  actualizarEstadoBoton();
  if (!puedeComprar) {
    botonCompra.disabled = true;
    botonCompra.textContent = product.disponible ? 'Variantes no disponibles' : 'Producto no disponible';
  }

  botonCompra.addEventListener('click', () => {
    if (!puedeComprar) return;
    if (!tallaActual) {
      tallaInfo.textContent = 'Selecciona una talla antes de agregar a la simulación';
      return;
    }

    let guardados;
    try {
      guardados = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
    } catch (error) {
      guardados = [];
    }
    const seleccionActual = Array.isArray(guardados)
      ? guardados.filter((item) => (typeof item === 'string' ? item : item?.id) !== product.id)
      : [];

    seleccionActual.push({
      id: product.id,
      talla: tallaActual,
      color: colorActual.nombre,
      imagen: colorActual.imagen
    });
    sessionStorage.setItem(storageKey, JSON.stringify(seleccionActual));
    localStorage.removeItem(backupKey);
    sessionStorage.setItem(newSelectionKey, 'true');

    actualizarEstadoBoton();

    if (vieneDeSimulacion) {
      window.location.href = 'catalogo.html#simulacion';
    }
  });
}
