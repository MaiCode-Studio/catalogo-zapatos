const STORAGE_KEY = 'simulacionCalzados';
const pedidoLista = document.getElementById('pedidoLista');
const pedidoVacio = document.getElementById('pedidoVacio');
const pedidoMonedaSinSeleccionar = document.getElementById('pedidoMonedaSinSeleccionar');
const pedidoTotalSeleccionado = document.getElementById('pedidoTotalSeleccionado');
const pedidoTotal = document.getElementById('pedidoTotal');
const pedidoReserva = document.getElementById('pedidoReserva');
const pedidoCuota40a = document.getElementById('pedidoCuota40a');
const pedidoCuota40b = document.getElementById('pedidoCuota40b');
const datosPedidoForm = document.getElementById('datosPedidoForm');
const datosPedidoResultado = document.getElementById('datosPedidoResultado');
const monedaPago = document.getElementById('monedaPago');

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

function leerPedido() {
  try {
    const guardados = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(guardados) ? guardados : [];
  } catch (error) {
    return [];
  }
}

function guardarPedido(pedido) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pedido));
}

function obtenerProducto(id) {
  return window.catalogo.find((item) => item.id === id);
}

function actualizarTotales(totalBcv, totalDivisa) {
  const mostrarBcv = monedaPago.value === 'bcv';
  const mostrarUsdt = monedaPago.value === 'usdt';
  const total = mostrarBcv ? totalBcv : totalDivisa;
  const formato = mostrarBcv ? formatCurrency : formatUsdt;
  const reserva = total * 0.2;
  const cuota40a = total * 0.4;
  const cuota40b = total * 0.4;

  pedidoMonedaSinSeleccionar.hidden = mostrarBcv || mostrarUsdt;
  pedidoTotalSeleccionado.hidden = !mostrarBcv && !mostrarUsdt;
  if (mostrarBcv || mostrarUsdt) {
    pedidoTotal.textContent = formato(total);
    pedidoReserva.textContent = formato(reserva);
    pedidoCuota40a.textContent = formato(cuota40a);
    pedidoCuota40b.textContent = formato(cuota40b);
  }
}

function renderPedido() {
  const pedido = leerPedido()
    .map((seleccion) => ({ seleccion, producto: obtenerProducto(seleccion.id) }))
    .filter((item) => item.producto && typeof item.seleccion === 'object');

  if (!pedido.length) {
    pedidoLista.innerHTML = '';
    pedidoVacio.hidden = false;
    datosPedidoForm.hidden = true;
    pedidoMonedaSinSeleccionar.hidden = false;
    pedidoTotalSeleccionado.hidden = true;
    return;
  }

  pedidoVacio.hidden = true;
  datosPedidoForm.hidden = false;
  pedidoLista.innerHTML = pedido
    .map(({ seleccion, producto }) => {
      const colorActual = producto.colores.find((color) => color.nombre === seleccion.color) || producto.colores[0];
      const tallaActual = producto.tallas.includes(seleccion.talla) ? seleccion.talla : producto.tallas[0];
      return `
        <article class="order-item" data-id="${producto.id}">
          <img src="${colorActual.imagen}" alt="${producto.nombre} - ${colorActual.nombre}" loading="lazy" />
          <div class="order-item-info">
            <h3>${producto.nombre}</h3>
            <label>Color
              <select class="order-color" aria-label="Color de ${producto.nombre}">
                ${producto.colores.map((color) => `<option value="${color.nombre}" ${color.nombre === colorActual.nombre ? 'selected' : ''}>${color.nombre}</option>`).join('')}
              </select>
            </label>
            <label>Talla
              <select class="order-size" aria-label="Talla de ${producto.nombre}">
                ${producto.tallas.map((talla) => `<option value="${talla}" ${talla === tallaActual ? 'selected' : ''}>${talla}</option>`).join('')}
              </select>
            </label>
          </div>
          <button class="order-delete" type="button" data-id="${producto.id}">Eliminar</button>
        </article>
      `;
    })
    .join('');

  const totalBcv = pedido.reduce((total, item) => total + item.producto.precio, 0);
  const totalDivisa = pedido.reduce((total, item) => total + (item.producto.precioDescuento ?? item.producto.precio), 0);
  actualizarTotales(totalBcv, totalDivisa);
}

pedidoLista.addEventListener('change', (event) => {
  const item = event.target.closest('.order-item');
  if (!item) return;

  const pedido = leerPedido();
  const seleccion = pedido.find((guardado) => guardado.id === item.dataset.id);
  if (!seleccion) return;

  if (event.target.classList.contains('order-color')) {
    seleccion.color = event.target.value;
    const producto = obtenerProducto(seleccion.id);
    seleccion.imagen = producto.colores.find((color) => color.nombre === seleccion.color)?.imagen;
  }
  if (event.target.classList.contains('order-size')) seleccion.talla = event.target.value;

  guardarPedido(pedido);
  renderPedido();
});

pedidoLista.addEventListener('click', (event) => {
  const button = event.target.closest('.order-delete');
  if (!button) return;

  const pedido = leerPedido().filter((seleccion) => seleccion.id !== button.dataset.id);
  guardarPedido(pedido);
  renderPedido();
});

datosPedidoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!monedaPago.value) {
    monedaPago.setCustomValidity('Selecciona la moneda con la que pagarás todo el pedido.');
    monedaPago.reportValidity();
    return;
  }
  monedaPago.setCustomValidity('');

  const pedido = leerPedido()
    .map((seleccion) => ({ seleccion, producto: obtenerProducto(seleccion.id) }))
    .filter((item) => item.producto && typeof item.seleccion === 'object');
  if (!pedido.length) return;

  const datos = new FormData(datosPedidoForm);
  const totalBcv = pedido.reduce((total, item) => total + item.producto.precio, 0);
  const totalDivisa = pedido.reduce((total, item) => total + (item.producto.precioDescuento ?? item.producto.precio), 0);
  const reservaBcv = totalBcv * 0.2;
  const reservaUsdt = totalDivisa * 0.2;
  const cuota40Bcv = totalBcv * 0.4;
  const cuota40Usdt = totalDivisa * 0.4;
  const mostrarBcv = monedaPago.value === 'bcv';
  const totalSeleccionado = mostrarBcv ? totalBcv : totalDivisa;
  const reservaSeleccionada = mostrarBcv ? reservaBcv : reservaUsdt;
  const cuota40Seleccionada = mostrarBcv ? cuota40Bcv : cuota40Usdt;
  const formatoSeleccionado = mostrarBcv ? formatCurrency : formatUsdt;
  const monedaSeleccionada = mostrarBcv ? 'BCV' : 'USDT';
  const detalles = pedido
    .map(({ seleccion, producto }) => {
      const colorActual = producto.colores.find((color) => color.nombre === seleccion.color) || producto.colores[0];
      return [
        `Calzado: ${producto.nombre}`,
        `Talla: ${seleccion.talla}`,
        `Color: ${seleccion.color}`,
        `Imagen: ${colorActual.imagen}`
      ].join('\n');
    })
    .join('\n\n');

  const mensaje = [
    'Pedido de Mai Shoes',
    `Nombre: ${datos.get('nombre')}`,
    `Apellido: ${datos.get('apellido')}`,
    `Ciudad: ${datos.get('ciudad')}`,
    `Dirección corta: ${datos.get('direccion')}`,
    '',
    detalles,
    '',
    `Moneda de pago para todo el pedido: ${monedaSeleccionada}`,
    `Total a pagar: ${formatoSeleccionado(totalSeleccionado)}`,
    `20% de reserva: ${formatoSeleccionado(reservaSeleccionada)}`,
    `40% cuota 1: ${formatoSeleccionado(cuota40Seleccionada)}`,
    `40% cuota 2: ${formatoSeleccionado(cuota40Seleccionada)}`
  ].join('\n');

  const whatsappUrl = `https://wa.me/584128672906?text=${encodeURIComponent(mensaje)}`;
  datosPedidoResultado.textContent = 'Abriendo WhatsApp con el detalle de tu pedido...';
  window.location.href = whatsappUrl;
});

monedaPago.addEventListener('change', () => {
  monedaPago.setCustomValidity('');
  renderPedido();
});

renderPedido();