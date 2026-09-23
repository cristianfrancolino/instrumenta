# Instrumenta

Instrumenta es un e-commerce de instrumentos musicales, construido como primer proyecto con React. Sirve como base para aprender e implementar funcionalidades típicas de una tienda web, como catálogo de productos, carrito de compras y navegación entre vistas.

## Tecnologías utilizadas

- React 19
- Vite
- ESLint
- Prettier
- react-icons

## Componentes

Los componentes están en `src/components`, cada uno en su propia carpeta junto con su archivo de estilos.

- **Navbar**: barra de navegación que queda fija arriba. Tiene el logo de la tienda a la izquierda y a la derecha las categorías de instrumentos (Guitarras, Bajos, Baterías, Teclados y Accesorios) y el carrito. Las categorías por ahora son links sin ruta, más adelante se van a usar para filtrar productos.
- **CartWidget**: ícono del carrito con un globito que muestra la cantidad de productos. Por ahora el número está fijo (3), después se va a conectar con el estado del carrito.
- **ItemListContainer**: contenedor de la sección principal. Recibe por props un mensaje de bienvenida (`greeting`) desde `App` y lo muestra centrado. Más adelante acá se va a mostrar el listado de productos.
- **ProductCard**: tarjeta de producto con contador de cantidad y botón de favorito (hecha en la clase de useState, todavía no se usa en la app).

## Instalación y ejecución

### Requisitos previos

- Node.js instalado (versión 18 o superior recomendada)
- npm

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd instrumenta
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador la URL que muestra la terminal (por defecto http://localhost:5173).

### Otros comandos disponibles

- `npm run build`: genera la versión de producción del proyecto.
- `npm run preview`: previsualiza localmente la build de producción.
- `npm run lint`: ejecuta ESLint para revisar el código.
