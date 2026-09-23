const catalogo = [
  {
    id: 'bota-alta',
    nombre: 'Bota Alta',
    nuevo: true,
    precio: 60.0,
    precioDescuento: 54.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#58111a', imagen: 'img/bota-alta-vino.jpg' },
      { nombre: 'Negro', hex: '#040404', imagen: 'img/bota-alta-negra.jpg' },
      { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/bota-alta-blanca.jpg' },
      { nombre: 'Marrón', hex: '#8b5a2b', imagen: 'img/bota-alta-marron.jpg' },
      { nombre: 'Negro Gamuza', hex: '#040404', imagen: 'img/bota-alta-negragamuza.jpg' }
    ],
    imagenes: [
      'img/bota-alta-vino.jpg',
      'img/bota-alta-negra.jpg',
      'img/bota-alta-blanca.jpg',
      'img/bota-alta-marron.jpg',
      'img/bota-alta-negragamuza.jpg'
    ],
    detalle: 'Bota alta estilizada hasta la rodilla con tacón geométrico firme y cierre lateral completo. La prenda clave para elevar tus outfits con un look elegante y de alto impacto, con un tacón en bloque de 7 cm.'
  },
  {
    id: 'botin-dama',
    nombre: 'Botín Dama',
    nuevo: true,
    precio: 48.0,
    precioDescuento: 43.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#040404', imagen: 'img/botin-dama-negro.jpg' },
      { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/botin-dama-blanco.jpg' },
      { nombre: 'Marrón', hex: '#8b5a2b', imagen: 'img/botin-dama-marron.jpg' },
      { nombre: 'Negro Gamuza', hex: '#040404', imagen: 'img/botin-dama-negrogamuza.jpg' }
    ],
    imagenes: [
      'img/botin-dama-negro.jpg',
      'img/botin-dama-blanco.jpg',
      'img/botin-dama-marron.jpg',
      'img/botin-dama-negrogamuza.jpg'
    ],
    detalle: 'Botín tipo combate con cordones, hebilla decorativa al tobillo y suela track antideslizante. Ofrece un estilo urbano, resistente y súper cómodo para todo el día, con un tacón track de 5 a 6 cm.'
  },
  {
    id: 'botin-pedreria',
    nombre: 'Botín Pedrería',
    nuevo: true,
    precio: 55.0,
    precioDescuento: 49.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/botin-pedreria-blanco.jpg' },
      { nombre: 'Marrón', hex: '#8b5a2b', imagen: 'img/botin-pedreria-marron.jpg' },
      { nombre: 'Negro Gamuza', hex: '#040404', imagen: 'img/botin-pedreria-negrogamuza.jpg' }
    ],
    imagenes: [
      'img/botin-pedreria-blanco.jpg',
      'img/botin-pedreria-marron.jpg',
      'img/botin-pedreria-negrogamuza.jpg'
    ],
    detalle: 'Botín bajo al tobillo con detalle de tachuelas plateadas a los lados y cierre práctico. Perfecto si buscas comodidad diaria con un detalle moderno que resalte, con un tacón en bloque de 5 a 6 cm.'
  },
  {
    id: 'bota-paris',
    nombre: 'Bota Paris',
    nuevo: true,
    precio: 55.0,
    precioDescuento: 50.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
    { nombre: 'Negro', hex: '#040404', imagen: 'img/botin-paris-negro.jpg' },
    { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/botin-paris-blanco.jpg' },
    { nombre: 'Negro Gamuza', hex: '#040404', imagen: 'img/botin-paris-negrogamuza.jpg' }
    ],
    imagenes: [
      'img/botin-paris-blanco.jpg', 
      'img/botin-paris-negrogamuza.jpg',
      'img/botin-paris-negro.jpg'],
    detalle: 'Botín con efecto arrugado en la caña y tacón bloque medio. Su diseño slouchy está en tendencia total para darle movimiento y versatilidad a tus outfits de temporada, con un tacón en bloque de 7 a 8 cm.'
  },
  {
    id: 'botin-karen',
    nombre: 'Botín Karen',
    nuevo: true,
    precio: 57.0,
    precioDescuento: 51.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#040404', imagen: 'img/botin-karen-negro.jpg' },
      { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/botin-karen-blanco.jpg' },
      { nombre: 'Negro Gamuza', hex: '#040404', imagen: 'img/botin-karen-negrogamuza.jpg' }
    ],
    imagenes: [
      'img/botin-karen-negro.jpg',
      'img/botin-karen-blanco.jpg',
      'img/botin-karen-negrogamuza.jpg'
    ],
    detalle: 'Botín clásico de caña corta con cierre lateral y tacón bloque. Aporta máxima firmeza al caminar y un toque estilizado a cualquier look, desde jeans hasta vestidos, con un tacón en bloque de 6.5 a 7.5 cm.'
  },
  {
    id: 'modelo-rihana',
    nombre: 'Modelo Rihana',
    nuevo: true,
    precio: 38.0,
    precioDescuento: 33.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#040404', imagen: 'img/modelo-rihana-negra.jpg' },
      { nombre: 'Blanco', hex: '#f5f3f0', imagen: 'img/modelo-rihana-blanca.jpg' },
      { nombre: 'Marrón', hex: '#8b5a2b', imagen: 'img/modelo-rihana-marron.jpg' },
      { nombre: 'Chocolate', hex: '#3d2314', imagen: 'img/modelo-rihana-chocolate.jpg' }
    ],
    imagenes: [
      'img/modelo-rihana-negra.jpg',
      'img/modelo-rihana-blanca.jpg',
      'img/modelo-rihana-marron.jpg',
      'img/modelo-rihana-chocolate.jpg'
    ],
    detalle: 'Sandalia de plataforma alta con tiras de ajuste rápido. Un diseño ultra cómodo y liviano, ideal para outfits relajados y casuales de todos los días, con una plataforma corrida de 5 a 6 cm.'
  },
  {
    id: 'tacon-ambar',
    nombre: 'Tacón Ambar',
    precio: 37.0,
    precioDescuento: 32.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/tacon-ambar-rosa.jpg' },
      { nombre: 'Negro', hex: '#040404', imagen: 'img/tacon-ambar-negro.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/tacon-ambar-amarillo.jpg' }
    ],
    imagenes: ['img/tacon-ambar.jpg', 'img/tacon-ambar-rosa.jpg', 'img/tacon-ambar-negro.jpg', 'img/tacon-ambar-amarillo.jpg'],
    detalle: 'Zapatos destalonados con punta fina, con un tacón de un aproximado de 3-4 cm y un delicado lazo frontal. El equilibrio perfecto entre estilo sofisticado y comodidad para tu día a día, disponible en variada paleta de tonos.'
  },
  {
    id: 'baleta-mitchel',
    nombre: 'Baleta Mitchel',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0b0b', imagen: 'img/baleta-mitchel-negro.jpg' },
      { nombre: 'Blanco', hex: '#d6c3a5', imagen: 'img/baleta-mitchel-blanco.jpg' }
    ],
    imagenes: ['img/baleta-mitchel-negro.jpg', 'img/aura-beich.jpg'],
    detalle: 'Un diseño clásico destalonado con elegante contraste bicolor en el borde y un detalle de lazo fino. Ideal para darle un toque chic y pulcro a cualquier outfit formal o casual.'
  },
  {
    id: 'mocasin-charol',
    nombre: 'Mocasin Charol',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Crema', hex: '#d7b47f', imagen: 'img/mocasin-charol-crema.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/mocasin-charol-vino.jpg' },
      { nombre: 'Negro', hex: '#0e0d0ddd', imagen: 'img/mocasin-charol-negro.jpg' },
      { nombre: 'Blanco', hex: '#f6f6f7', imagen: 'img/mocasin-charol-blanco.jpg' }
    ],
    imagenes: ['img/mocasin-charol-crema.jpg', 'img/mocasin-charol-vino.jpg', 'img/mocasin-charol-negro.jpg', 'img/mocasin-charol-blanco.jpg'],
    detalle: 'Mocasin estilo chunky en acabado charol brillante con adorno de lazo en el empeine y costuras marcadas. Cuenta con una suela dentada de goma que combina un toque moderno, juvenil y súper cómodo para el uso diario, suela gruesa track con una elevación de 4 a 5 cm en el talón y unos 2.5 a 3 cm en la parte delantera.'
  },
  {
    id: 'tacon-aura',
    nombre: 'Tacón Aura',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111213', imagen: 'img/aura-negro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/aura-vino.jpg' },
      { nombre: 'Beich', hex: '#e1b05bdd', imagen: 'img/aura-beich.jpg' },
      { nombre: 'Blanco', hex: '#f6f6f7', imagen: 'img/aura-blanco.jpg' }
    ],
    imagenes: ['img/aura.jpg', 'img/aura-negro.jpg', 'img/aura-vino.jpg', 'img/aura-beich.jpg', 'img/aura-blanco.jpg'],
    detalle: 'Elegante tacón estilizado con punta triangular, un tacón de un aproximado de 7-8 cm y un lazo llamativo que acapara todas las miradas. Un diseño romántico y sofisticado disponible en tus tonos favoritos.'
  },
  {
    id: 'tacon-coquette',
    nombre: 'Tacón Coquette',
    precio: 39.0,
    precioDescuento: 34.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0c0c', imagen: 'img/coquette-negro.jpg' },
      { nombre: 'Blanco', hex: '#eeeff1', imagen: 'img/coquette-blanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/coquette-vino.jpg' }
    ],
    imagenes: ['img/taconcoquette.jpg', 'img/coquette-blanco.jpg', 'img/coquette-negro.jpg', 'img/coquette-vino.jpg'],
    detalle: 'Fórmula diseñada para ofrecer estabilidad, rapidez y total libertad de movimiento en cada paso, con un tacón de un aproximado de 3-4 cm.'
  },
  {
    id: 'tacon-charol',
    nombre: 'Tacón Charol',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f3f4f6', imagen: 'img/charol-blanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/charol-chocolate.jpg' },
      { nombre: 'Negro', hex: '#111827', imagen: 'img/charol-negro.jpg' }, 
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/charol-amarillo.jpg' }
    ],
    imagenes: ['img/charol-blanco.jpg', 'img/charol-negro.jpg', 'img/charol-chocolate.jpg', 'img/charol-amarillo.jpg'],
    detalle: 'Tacón medio destalonado en acabado charol con un lazo estructurado en la punta. La opción perfecta para lucir elegante y ejecutiva sin perder la comodidad.'
  },
  {
    id: 'tacon-marrake',
    nombre: 'Tacón Marrake',
    precio: 39.0,
    precioDescuento: 34.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/marrake-marron.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/marrake-amarillo.jpg' },
      { nombre: 'Negro', hex: '#1f2937', imagen: 'img/marrake-negro.jpg' },
      { nombre: 'Blanco', hex: '#eff2f6', imagen: 'img/marrake-blanco.jpg' }
    ],
    imagenes: ['img/marrake.jpg', 'img/marrake-marron.jpg', 'img/marrake-negro.jpg','img/marrake-amarillo.jpg', 'img/marrake-blanco.jpg'],
    detalle: 'Sandalia de tacón ancho con aproximado de 6-7 cm, tiras cruzadas y hebilla dorada. Un calzado versátil, cómodo y moderno, diseñado para destacar en cualquier ocasión con su diversidad de colores.'
  },
  {
    id: 'tacon-sofia',
    nombre: 'Tacón Sofia',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111827', imagen: 'img/sofia-negro.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/sofia-blanco.jpg' },
      { nombre: 'Vino', hex: '#452204f5', imagen: 'img/sofia-vino.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/sofia-rojo.jpg' },
      { nombre: 'Rosa', hex: '#eabedbde', imagen: 'img/sofia-rosa.jpg' },
      { nombre: 'Oliva', hex: '#7ea766d1', imagen: 'img/sofia-oliva.jpg' }
    ],
    imagenes: ['img/sofia-blanco.jpg', 'img/sofia-negro.jpg', 'img/sofia-vino.jpg','img/sofia-rojo.jpg', 'img/sofia-rosa.jpg', 'img/sofia-oliva.jpg'],
    detalle: 'Zapato de salón slingback refinado y discreto. En charol con punta afilada, cuenta con un pequeño y delicado lazo de charol como detalle final, con el tacón bloque medio y cuadrado, estable con aproximadamente 4-5 cm.'
  },
  {
    id: 'baleta-emmy',
    nombre: 'Baleta Emmy',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#fefefe', imagen: 'img/baleta-emmy-blanco.jpg' },
      { nombre: 'Negro', hex: '#101113', imagen: 'img/baleta-emmy-negro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/baleta-emmy-vino.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/baleta-emmy-rojo.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/baleta-emmy-beich.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/baleta-emmy-amarillo.jpg' }
    ],
    imagenes: ['img/baleta-emmy-blanco.jpg', 'img/baleta-emmy-negro.jpg', 'img/baleta-emmy-vino.jpg', 'img/baleta-emmy-rojo.jpg' , 'img/baleta-emmy-beich.jpg' , 'img/baleta-emmy-amarillo.jpg'],
    detalle: 'Baleta slingback de charol con punta fina y hebilla/adorno rectangular al tono en la parte delantera y plano.'
  },
  { 
    id: 'baleta-nebula',
    nombre: 'Baleta Nebula',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/baleta-nebula-azul.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/baleta-nebula-rosa.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/baleta-nebula-amarillo.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/baleta-nebula-marron.jpg' }
    ],
    imagenes: ['img/baleta-nebula-azul.jpg', 'img/baleta-nebula-rosa.jpg', 'img/baleta-nebula-amarillo.jpg', 'img/baleta-nebula-marron.jpg'],
    detalle: 'Baleta destalonados de punta fina con lazo delicado en acabado brillante. El calzado bajo perfecto para mantener la elegancia y frescura en tu rutina diaria.'
  },
  { 
    id: 'tacon-coral',
    nombre: 'Tacón Coral',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0a0a0bde', imagen: 'img/coral-negro.jpg' },
      { nombre: 'Blanco', hex: '#ece7eb', imagen: 'img/coral-blanco.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/coral-amarillo.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/coral-rojo.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/coral-rosa.jpg' }
    ],
    imagenes: ['img/tacon-coral.jpg', 'img/coral-negro.jpg', 'img/coral-blanco.jpg', 'img/coral-amarillo.jpg','img/coral-rojo.jpg', 'img/coral-rosa.jpg'],
    detalle: 'Zapato de salón destalonado con punta afilada y acabado en charol brillante. Destaca por un vistoso lazo de charol sobre el empeine y una fina correa ajustable al tobillo, tacón bloque medio-alto y ancho, muy cómodo y estable con aproximado de 6-7 cm.'
  },
  { 
    id: 'flats-merida',
    nombre: 'Flats Merida',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Bege', hex: '#e1b05bdd', imagen: 'img/merida-beig.jpg' },
      { nombre: 'Negro', hex: '#121112', imagen: 'img/merida-negro.jpg' },
      { nombre: 'Blanco', hex: '#f0f1ea', imagen: 'img/merida-blanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/merida-rojo.jpg' }
    ],
    imagenes: ['img/flats-merida.jpg', 'img/merida-beig.jpg', 'img/merida-negro.jpg', 'img/merida-blanco.jpg', 'img/merida-rojo.jpg'],
    detalle: 'Flat slingback de punta afilada con corte en "V" y detalle de lazo plano sobre el empeine, plano con correa posterior al talón.'
  },
  { 
    id: 'flats-coquette',
    nombre: 'Flats Coquette',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0c0cde', imagen: 'img/flats-coquette-negro.jpg' },
      { nombre: 'Blanco', hex: '#ede7ec', imagen: 'img/flats-coquette-blanco.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/flats-coquette-rojo.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/flats-coquette-marron.jpg' }
    ],
    imagenes: ['img/flats-coquette-negro.jpg', 'img/flats-coquette-blanco.jpg', 'img/flats-coquette-rojo.jpg', 'img/flats-coquette-marron.jpg'],
    detalle: 'Flat slingback en charol brillante de punta afilada con un pequeño y coqueto lazo en el empeine, plano con talón descubierto.'
  },
  { 
    id: 'baleta-dama',
    nombre: 'Baleta Dama',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#070707de', imagen: 'img/baleta-dama-negro.jpg' },
      { nombre: 'Blanco', hex: '#fffeff', imagen: 'img/baleta-dama-blanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/baleta-dama-beich.jpg' }
    ],
    imagenes: ['img/baleta-dama-negro.jpg', 'img/baleta-dama-blanco.jpg', 'img/baleta-dama-beich.jpg'],
    detalle: 'Baleta destalonado de estilo romántico. Confeccionado en malla con encaje floral y lazo delicado en la punta.'
  },
  { 
    id: 'tacon-maya',
    nombre: 'Tacón Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/maya-beige.jpg' },
      { nombre: 'Negro', hex: '#060606', imagen: 'img/maya-negro.jpg' },
      { nombre: 'Blanco', hex: '#f9f9f6', imagen: 'img/maya-blanco.jpg' }
    ],
    imagenes: ['img/maya-beige.jpg', 'img/maya-negro.jpg', 'img/maya-blanco.jpg'],
    detalle: 'Zapato de salón romántico y elegante. Confeccionado en delicado encaje floral sobre malla transparente, con punta afilada, adorno de lazo fino en el empeine y correa ajustada al tobillo, tacón bloque medio-alto y grueso, brinda gran estabilidad al caminar, con un aproximado de 6-7 cm.'
  },
  { 
  id: 'baleta-atenas',
    nombre: 'Baleta Atenas',
    precio: 28.0,
    precioDescuento: 23.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0f0f10de', imagen: 'img/atenas-negro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/atenas-vino.jpg' },
      { nombre: 'Amarillo', hex: '#f6f03e', imagen: 'img/atenas-amarillo.jpg' },
      { nombre: 'Blanco', hex: '#f0f1ea', imagen: 'img/atenas-blanco.jpg' }
    ],
    imagenes: ['img/baleta-atenas.jpg','img/atenas-negro.jpg', 'img/atenas-vino.jpg', 'img/atenas-amarillo.jpg'],
    detalle: 'Baletina clásica de punta afilada con delicado lazo fino en el empeine y detalles metálicos en las puntas del lazo, totalmente plana.'
  },
  { 
  id: 'tacon-stiletto',
    nombre: 'Tacón Stiletto',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/stiletto-rojo.jpg' },
      { nombre: 'Negro', hex: '#1c1b1c', imagen: 'img/stiletto-negro.jpg' },
      { nombre: 'Blanco', hex: '#f7f8f2', imagen: 'img/stiletto-blanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/stiletto-beige.jpg' }
    ],
    imagenes: ['img/stiletto-rojo.jpg', 'img/stiletto-negro.jpg', 'img/stiletto-blanco.jpg', 'img/stiletto-beige.jpg'],
    detalle: 'El clásico y sexy zapato de salón. De punta afilada y confeccionado en charol, su diseño limpio y minimalista es pura elegancia, con un tacon fino, de aguja de aproximadamente 10 cm o más.'
  },
  { 
  id: 'flats-lore',
    nombre: 'Flats Lore',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#101011de', imagen: 'img/flats-lore-negro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/flats-lore-beich.jpg' },
      { nombre: 'Blanco', hex: '#f3f5ec', imagen: 'img/flats-lore-blanco.jpg' }
    ],
    imagenes: ['img/flats-lore-negro.jpg', 'img/flats-lore-beich.jpg', 'img/flats-lore-blanco.jpg'],
    detalle: 'Zapato plano destalonado de punta afilada en charol, destacado por un adorno geométrico/cuadrado en el empeine, sulea plana.'
  },
  { 
  id: 'mocasino',
    nombre: 'Mocasino',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0e0e0ede', imagen: 'img/mocasino-negro.jpg' },
      { nombre: 'Beige', hex: '#eac991f5', imagen: 'img/mocasino-beige.jpg' },
      { nombre: 'Marron', hex: '#e1b05bdd', imagen: 'img/mocasino-marron.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/mocasino-vino.jpg' }
    ],
    imagenes: ['img/mocasino-negro.jpg', 'img/mocasino-beige.jpg', 'img/mocasino-marron.jpg', 'img/mocasino-vino.jpg'],
    detalle: 'Mocasín clásico y robusto de acabado brillante/charol con herraje metálico decorativo sobre el empeine y suela gruesa e dentada tipo track.'
  },
  { 
    id: 'puntilla-charol',
    nombre: 'Puntilla Charol',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/puntilla-vino.jpg' },
      { nombre: 'Negro', hex: '#0a090a', imagen: 'img/puntilla-negro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/puntilla-beige.jpg' }
    ],
    imagenes: ['img/puntilla-charol.jpg','img/puntilla-vino.jpg', 'img/puntilla-negro.jpg', 'img/puntilla-beige.jpg'],
    detalle: 'Zapato de salón moderno y atrevido. En charol con punta muy afilada, destaca por su talón abierto y doble correa al tobillo decorada con una fina cadena dorada, con un tacón alto y fino, tipo stiletto con aproximadamente 8-9 cm.'
  },
  { 
    id: 'baleta-diana',
    nombre: 'Baleta Diana',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/diana-rojo.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/diana-beige.jpg' },
      { nombre: 'Negro', hex: '#040403', imagen: 'img/diana-negro.jpg' },
      { nombre: 'Dorado', hex: '#a38c06', imagen: 'img/diana-dorado.jpg' }
    ],
    imagenes: ['img/diana-rojo.jpg', 'img/diana-beige.jpg', 'img/diana-negro.jpg', 'img/diana-dorado.jpg'],
    detalle: 'Baleta destalonado de punta semi-cuadrada. Acabado en charol brillante con adorno metálico dorado en la punta.'
  },
  { 
    id: 'tacon-olivia',
    nombre: 'Tacón Olivia',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#000000de', imagen: 'img/olivia-negro.jpg' },
      { nombre: 'Oliva', hex: '#a1c98ad6', imagen: 'img/olivia-oliva.jpg' },
      { nombre: 'Crema', hex: '#ebe8d5', imagen: 'img/olivia-crema.jpg' }
    ],
    imagenes: ['img/olivia-negro.jpg', 'img/olivia-oliva.jpg', 'img/olivia-crema.jpg'],
    detalle: 'Sandalia de tacón moderna y sofisticada. De punta cuadrada y acabado en charol brillante, se distingue por un lazo de charol sobre el empeine y una fina correa al tobillo, tacón bloque alto y cuadrado, muy robusto con un aproximado de 8-9 cm.'
  },
  { 
    id: 'tacon-clasic',
    nombre: 'Tacón Clasic',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0f1112de', imagen: 'img/clasic-negro.jpg' },
      { nombre: 'Blanco', hex: '#fbf7fa', imagen: 'img/clasic-blanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/clasic-vino.jpg' }
    ],
    imagenes: ['img/clasic-negro.jpg', 'img/clasic-blanco.jpg', 'img/clasic-vino.jpg'],
    detalle: 'Zapato de salón atemporal. De charol brillante y punta afilada, cuenta con una fina correa al tobillo para un look sofisticado y versátil, tacón bloque medio-alto y cuadrado, estable con aproximadamente 6-7 cm.'
  },
  { 
    id: 'modelo-luna',
    nombre: 'Modelo Luna',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#070707de', imagen: 'img/luna-negro.jpg' },
      { nombre: 'Blanco', hex: '#fdf7fc', imagen: 'img/luna-blanco.jpg' },
      { nombre: 'Marron', hex: '#aa620b', imagen: 'img/luna-marron.jpg' }
    ],
    imagenes: ['img/modelo-luna.jpg','img/luna-negro.jpg', 'img/luna-blanco.jpg', 'img/luna-marron.jpg'],
    detalle: 'Sandalia destalonada de estilo casual/urbano. Cuenta con capellada ancha y hebilla metálica grande sobre una base ergonómica, plataforma baja.'
  },
  { 
    id: 'tacon-encaje',
    nombre: 'Tacón Encaje',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#09090ade', imagen: 'img/encage-negro.jpg' },
      { nombre: 'Blanco', hex: '#ffffff', imagen: 'img/encage-blanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/encage-beige.jpg' }
    ],
    imagenes: ['img/encage-negro.jpg', 'img/encage-blanco.jpg', 'img/encage-beige.jpg'],
    detalle: 'Mule refinado y romántico. Con cuerpo de delicado encaje floral sobre malla, presenta punta puntiaguda con un lazo de tela a juego, tacón alto y fino, tipo stiletto con aproximadamente de 8-9 cm.'
  },
  { 
    id: 'tacon-prisma',
    nombre: 'Tacón Prisma',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#080809de', imagen: 'img/prisma-negro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/prisma-beige.jpg' },
      { nombre: 'Blanco', hex: '#fefffb', imagen: 'img/prisma-blanco.jpg' }
    ],
    imagenes: ['img/prisma-negro.jpg', 'img/prisma-beige.jpg', 'img/prisma-blanco.jpg'],
    detalle: 'Mule romántico y femenino. Confeccionado en delicado encaje floral sobre malla transparente, presenta una punta puntiaguda con un lazo de tela a juego, tacón alto y fino, tipo stiletto con un aproximado de 8-9 cm.'
  },
  { 
    id: 'tacon-philipina',
    nombre: 'Tacón Philipina',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/philipina-vino.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/philipina-beige.jpg' },
      { nombre: 'Blanco', hex: '#fafafa', imagen: 'img/philipina-blanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/philipina-chocolate.jpg' }
    ],
    imagenes: ['img/philipina-vino.jpg', 'img/philipina-beige.jpg', 'img/philipina-blanco.jpg', 'img/philipina-chocolate.jpg'],
    detalle: 'Zapato de salón slingback clásico y coqueto. Acabado en charol brillante, con punta redonda adornada por un delicado lazo de charol y detalles dorados, tacón medio y cuadrado con un aproximado de 4-5 cm, muy estable.'
  },
  { 
    id: 'tacon-bordada',
    nombre: 'Tacón Bordada',
    precio: 42.0,
    precioDescuento: 37.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/bordada-vino.jpg' },
      { nombre: 'Dorado', hex: '#c9b351', imagen: 'img/bordada-dorada.jpg' },
      { nombre: 'Negro', hex: '#000000', imagen: 'img/bordada-negra.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/bordada-marron.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/bordada-rosa.jpg' },
    ],
    imagenes: ['img/tacon-bordada.jpg','img/bordada-vino.jpg', 'img/bordada-dorada.jpg', 'img/bordada-negra.jpg', 'img/bordada-marron.jpg', 'img/bordada-rosa.jpg'],
    detalle: 'Elegante zapato de tacón slingback con punta afilada. Destaca por su base de tela crema texturizada con sofisticados bordados florales y correas de charol a juego, tacón medio-alto con un aproximado de 6-7 cm.'
  },
  { 
    id: 'baleta-maryjean',
    nombre: 'Baleta Mary Jean',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#070808de', imagen: 'img/maryjean-negro.jpg' },
      { nombre: 'Blanco', hex: '#fffeff', imagen: 'img/maryjean-blanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/maryjean-marron.jpg' }
    ],
    imagenes: ['img/maryjean-negro.jpg', 'img/maryjean-blanco.jpg', 'img/maryjean-marron.jpg'],
    detalle: 'Flat cerrado de horma redonda y corte coquette. Confeccionado en acabado mate con detalle de lazo brillante en el empeine.Plano, súper cómodo para uso diario.'
  }
];

const AJUSTES_PRODUCTOS_KEY = 'maiShoesAjustesProductos';

function obtenerAjustesProductos() {
  try {
    const ajustes = JSON.parse(localStorage.getItem(AJUSTES_PRODUCTOS_KEY) || '{}');
    return ajustes && typeof ajustes === 'object' ? ajustes : {};
  } catch (error) {
    return {};
  }
}

const ajustesProductos = obtenerAjustesProductos();
const configuracionPublicada = window.productosConfig && typeof window.productosConfig === 'object'
  ? window.productosConfig
  : {};

window.catalogoBase = catalogo;
window.catalogo = catalogo.map((producto) => {
  const ajustes = ajustesProductos[producto.id] || configuracionPublicada[producto.id];
  if (!ajustes) return { ...producto, disponible: true };

  const precio = Number(ajustes.precio);
  const precioDescuento = Number(ajustes.precioDescuento);
  const coloresDisponibles = Array.isArray(ajustes.colores) ? ajustes.colores : producto.colores.map((color) => color.nombre);
  const tallasDisponibles = Array.isArray(ajustes.tallas) ? ajustes.tallas : producto.tallas;

  return {
    ...producto,
    disponible: ajustes.disponible !== false,
    precio: Number.isFinite(precio) && precio >= 0 ? precio : producto.precio,
    precioDescuento: Number.isFinite(precioDescuento) && precioDescuento >= 0 ? precioDescuento : producto.precioDescuento,
    colores: producto.colores.filter((color) => coloresDisponibles.includes(color.nombre)),
    tallas: producto.tallas.filter((talla) => tallasDisponibles.includes(talla))
  };
});
