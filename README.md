# Proyecto Green Point

## [Changelog](#new)

## Acerca de este trabajo:

Para culminar mi preparación básica en el mundo del front-end y con el propósito de satisfacer mi cursada de React he creado este e-commerce. Es una tienda online de alimentos dietéticos/veganos/etc. Elegí este rubro porque es algo que me interesa y, a mí juzgar, está lleno de categorías que pueden complejizar mi trabajo a gusto (para establecer filtros, tags, etc).

## Estructura del proyecto

En primera instancia, y como las consignas del curso de React sugieren, este sitio va a tener 3 secciones.
- Productos: mi idea es poder agregar muchos productos y establecer filtros pragmáticos para mostrar la página a gusto del usuario. Es el eje central del proyecto.

- Sucursales: se agregará contenido de texto en cantidad, junto a la incorporación de mapas e imágenes.

- Contacto: pretendo volcar un intenso trabajo de formularios en esta parte del sitio. Trabajando con APIs de email seguramente.

## Herramientas utilizadas

-**Tailwind UI:** framework CSS parecido a Bootstrap. Lo utilizo para ahorrar tiempo creando componentes, además me pareció una buena idea incorporar un framework nuevo a mis trabajos. Aprecio mucho su abundancia de clases y el poder personalizarlo manipulando un archivo config js para modificar breakpoints o colores por ejemplo. Me llevé una grata sorpresa al enterarme la cantidad de puglins y complementos que tiene Tailwind, los cuales potencian aún más su versatilidad. Otro punto fuerte de este framework es su extensión de VSCode que facilita encontrar las clases y se puede ver a detalle los estilos de css aplicados.

-**Headless UI:** complemento propio de Tailwind para algunos componentes, es indispensable para el Navbar que lleva mi proyecto.

-**Heroicons:** biblioteca de iconos svg de Tailwind, se usan algunos en el Navbar, por ejemplo el carrito.

-**DaisyUI:** Plugin de componentes basado en TailwindUI, gran parte de los componentes de este sitio utilizan este plugin. Destaco la sencillez de sus componentes y la fácil customización de colores que ofrece. 
- **React-toastify:** intenté usar toastify-js para poner alertas más visuales pero no funciona bien con React parece. React-toastify parece ser muy popular así que me involucré en la aventura de leer su documentación. Tiene un nivel de personalización exagerado, es incalculable la cantidad de cosas que se le pueden agregar al toast.
 En el proyecto lo uso para avisar cuántos productos fueron agregados al carrito, se trata de brindarle más interacción a la página con el usuario.

## Navegabilidad

Aquí se incoporarán las explicaciones a detalle para desplazarse a través del proyecto.

### Página de inicio, visualización de todos los productos.

<img src="https://i.ibb.co/746fh7r/tutorial-navegacion-react.png" style="width: 60%" alt="tutorial-navegacion-react" border="0">

> - 1: Logo del sitio, siempre lleva a inicio (todos los productos).
> - 2: dropdown, contiene los filtros de productos (ver abajo).
> - 3: página de contacto, dirige a un apartado de formularios.
> - 4: foto de productos, dirige a detalles de producto.
> - 5: botón "ver más", ídem 4.

### Dropdown con categorías.

<img src="https://i.ibb.co/5kzm9vV/dropdown-filtros-react.png" style="width: 35%" alt="dropdown-filtros-react" border="0">

> Hay 5 filtros actualmente, un producto puede pertenecer a más de una categoría.

### ItemDetail

<img src="https://i.ibb.co/1JLFXQc/itemdetail-tutorial-react.png" style="width: 60%" alt="itemdetail-tutorial-react" border="0">

> Desde ItemDetail se puede volver mediante el logo al inicio (1), obsérvese el contador requerido en la parte inferior de la página (2). Productos y Contacto son obviamente funcionales desde el apartado detalles. 



<a name="new"><a/>
## Novedades

- **15/09/22**
- Se ha creado la estructura base del componente ItemDetail.
- Se han arreglado problemas menores de arrays.
- Editado el Readme.md, acorde a este proyecto.
- **19/09/22**
- Componentes nuevos: footer, ContactPage.
- Agregados más productos con sus imágenes.
- Routing mediante react-router-dom.
- Filtros funcionales, Logo linkeado con inicio, cards linkeadas con detail.
- ItemDetail muestra contenido en detalle de cada producto, ahora tiene más relevancia.
- CartWidget tiene un número que marcará los productos en el carrito.
- Posición de Navbar fija en todo momento (sticky).
- Arreglados problemas de z-index.
- Eliminado código irrelevante de Navbar y otros archivos.
- **21/09/22**
- Agregado stock por producto al database (product.js).
- Creado eventos que propician la interacción de datos entre componentes padres e hijos.
- Agregado context, estados globales y funciones globales.
- Carrito muestra conenido y posee funcionalidad (borrar, vaciar, total, etc).
- Carrito no repite items, e incluso *quantity* de los items se actualiza si se agregan más del mismo item.
- CartWidget muestra el total de items en el carrito (si es 0 no aparece).
- Utilizado operador ternario y otros para montar condicionalmente elementos diversos.
- Ejemplo: si el stock es igual al valor del contador, el botón "+" se bloquea.
- Agregado react-toastify para ofrecer mejores alertas.