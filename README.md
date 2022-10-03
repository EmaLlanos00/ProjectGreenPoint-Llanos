# Proyecto Green Point

## [Changelog](#new)

## [Github Pages](https://emallanos00.github.io/)

## Acerca de este trabajo:

Para culminar mi preparación básica en el mundo del front-end y con el propósito de satisfacer mi cursada de React he creado este e-commerce. Es una tienda online de alimentos dietéticos/veganos/etc. Elegí este rubro porque es algo que me interesa y, a mí juzgar está lleno de categorías que pueden complejizar mi trabajo a gusto (para establecer filtros, tags, etc).

## Estructura del proyecto

En primera instancia, este sitio tiene 3 secciones bien diferenciadas: productos, sucursales y contacto. Contemplado el carrito, el login y los filtros, podemos hablar de unas 10 u 11
secciones bien diferenciadas. 

El layout es simple, de tipo Navbar-Contenido-Footer. El Navbar posee contenido dinámico tales como el dropdown, cartWidget y los modales.

- Productos: mi idea es poder agregar muchos productos y establecer filtros pragmáticos para mostrar la página a gusto del usuario. Es el eje central del proyecto.

- Sucursales: muestra un header con mapa y texto, la página más sencilla del trabajo.

- Contacto: utilizando la API de EmailJs esta página ofrece un medio de contacto real conmigo, un formulario sencillo que le aporta realismo al sitio.

- Login/iniciar sesión: si bien no es una parte del sitio que tenga una ruta, es lo suficientemente relevante como para tener su propio contexto. Mediante tabs se *switchea* entre formularios. Por el momento no funciona pero la idea es darle una verosimilitud casi completa al e-commerse desarrollando este modal en su totalidad.

## Herramientas utilizadas

- **[Tailwind CSS:](https://tailwindcss.com/)** framework CSS parecido a Bootstrap. Lo utilizo para ahorrar tiempo creando componentes, además me pareció una buena idea incorporar un framework nuevo a mis trabajos. Aprecio mucho su abundancia de clases y el poder personalizarlo manipulando un archivo config js para modificar breakpoints o colores por ejemplo. Me llevé una grata sorpresa al enterarme la cantidad de puglins y complementos que tiene Tailwind, los cuales potencian aún más su versatilidad. Otro punto fuerte de este framework es su extensión de VSCode que facilita encontrar las clases y se puede ver a detalle los estilos de css aplicados.

- **[Headless UI:](https://headlessui.com/)** complemento propio de Tailwind para algunos componentes, es indispensable para el Navbar que lleva mi proyecto.

- **[Heroicons:](https://heroicons.com/)** biblioteca de iconos svg de Tailwind, se usan algunos en el Navbar, por ejemplo el carrito.

- **[DaisyUI:](https://daisyui.com/)** Plugin de componentes basado en TailwindUI, gran parte de los componentes de este sitio utilizan este plugin. Destaco la sencillez de sus componentes y la fácil customización de colores que ofrece. 

- **[react-router-dom:](https://v5.reactrouter.com/web/guides/quick-start)** requerido para la cursada. Dependencia muy útil que sirve para enlazar los diversos componentes del proyecto. Imprescindible para e-commerse SPA de este tipo.

- **[React-toastify:](https://fkhadra.github.io/react-toastify/introduction/)** intenté usar toastify-js para poner alertas más visuales pero no funciona bien con React parece. React-toastify parece ser muy popular así que me involucré en la aventura de leer su documentación. Tiene un nivel de personalización exagerado, es incalculable la cantidad de cosas que se le pueden agregar al toast.
 En el proyecto lo uso para avisar cuántos productos fueron agregados al carrito, se trata de brindarle más interacción a la página con el usuario.

- **[react-content-loader:](https://github.com/danilowoz/react-content-loader#readme)** con el propósito de lograr mayor interactividad con el usuario se han agregado svgs que representan la carga de contenido. Dichos componentes son apenas apreciables mientras se vuelve al inicio o se accede a los detalles de algún producto. A pesar de ser tan imperceptibles siento que mejoran mucho el proyecto y lo hacen más completo.

- **[EmailJs:](https://www.emailjs.com/)** se utiliza para que el formulario de contacto efectivamente envie un mail y un auto-reply mediante la dependencia propia de la api.

- **[Firebase:](https://firebase.google.com/)** obligatorio para la cursada. Herramienta muy potente para la gestión, obtención, edición y creación de base de datos para el sitio.

- **[Formik:](https://formik.org/)** dependencia enfocada en simplificar los formularios de React. La utilicé para los formularios de ingreso/creación de cuenta de la página.

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
- **23/09/22**
- Vinculados estados de Context con session Storage (carrito guarda información al actualizar página).
- Añadidos pantallas de carga con svg y dependencias.
- Datos del ecommerse son obtenidos por Firebase.
- Arreglado bug donde CardWidget no renderizaba valores si un item ya existía en carrito.
- **26/09/22**
- Imágenes alojadas de forma externa.
- Enviada orden de compra con Firebase, modificado stock de productos de DB.
- Maquetado básico de páginas extra (Contacto, Sucursales).
- Formulario de ContactPage funcional con api EmailJs.
- Nuevo componente Breadcrumb para mostrar ubicación en el sitio.
- Nuevo context para iniciar sesión a través de un modal.
- Checkeada la identación y comentarios/código innecesarios.