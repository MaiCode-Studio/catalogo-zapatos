# catalogo-zapatos
Catálogo de zapatos interactivo, con simulación de precio, información y gestión de pedidos.

## Publicación desde administración

El panel `admin.html` publica los cambios mediante la función `api/publicar-productos.js`. La función actualiza `productos-config.js` en GitHub; si el repositorio está conectado a Vercel, cada commit inicia un despliegue automático.

Configura estas variables privadas en Vercel:

```text
ADMIN_USER=gerente
ADMIN_PASSWORD=una-clave-segura
GITHUB_TOKEN=token-fine-grained-con-permiso-Contents-Read-and-write
GITHUB_OWNER=usuario-o-organizacion
GITHUB_REPO=nombre-del-repositorio
GITHUB_BRANCH=main
GITHUB_CONFIG_PATH=productos-config.js
```

El token debe ser de tipo fine-grained y tener acceso únicamente al repositorio de la tienda. No se debe escribir ningún token dentro de los archivos públicos del proyecto. Después de configurar las variables, redepliega Vercel y entrega al negocio el enlace `/admin.html` junto con el usuario y contraseña.
