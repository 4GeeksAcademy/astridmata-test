//DOM Y EVENTOS
//el objetivo de hoy es Manipular elementos dinámicamente. y Trabajar con eventos para hacer la página web interactiva.


// ¿Qué es el DOM? (Document Object Model
//     1. ¿Qué es el DOM?
//     Teoría: El DOM (Document Object Model) es una representación estructurada del documento HTML como un árbol de nodos, donde cada nodo es una etiqueta, un atributo o un fragmento de texto. Con JavaScript, podemos interactuar con estos nodos para modificar su contenido, estructura o estilo.



//________________ Selección de Elementos del DOM
//     Teoría: Para modificar un elemento en el DOM, primero debemos seleccionarlo. JavaScript nos proporciona varios métodos para seleccionar elementos:
    
//     document.getElementById(id): Selecciona un elemento por su id.

//     document.getElementsByClassName(className): Selecciona todos los elementos que tienen una clase específica.

//     document.getElementsByTagName(tagName): Selecciona todos los elementos con una etiqueta específica (ejemplo: p, div).

//     document.querySelector(selector): Selecciona el primer elemento que coincida con un selector CSS.

//     document.querySelectorAll(selector): Selecciona todos los elementos que coincidan con un selector CSS.


// EJEMPLO 1
    // Selección de elementos
const titulo = document.getElementById('titulo');





//__________________Manipulación de Contenido___________________________
// Teoría: Una vez que tenemos seleccionado un elemento, podemos modificar su contenido usando propiedades como:

// textContent: Modifica el contenido de texto de un elemento.
// innerHTML: Modifica el contenido HTML de un elemento (permitiendo agregar etiquetas HTML).

// Modificación de texto
//les muestro desde la consola 
//
//document.getElementById("titulo").textContent = "hola mundo"
//
//volvemos al ejemplo mas grafico 

const titulo1 = document.getElementById('titulo');
titulo.textContent = '¡Este es el nuevo título!'; //
//Usamos document.getElementById('titulo') para seleccionar el elemento <h1>. Luego, con textContent, modificamos el texto del título a "¡Este es el nuevo título!".




// Ejemplo 2: Modificar el contenido de un párrafo, añadiendo etiquetas HTML
// HTML:
const descripcion = document.getElementById('descripcion');
descripcion.innerHTML = 'Este es el <strong>nuevo</strong> párrafo con texto <em>modificado</em>.'; 

// Aquí seleccionamos el párrafo por su ID, y luego, con innerHTML, reemplazamos su contenido con texto que incluye etiquetas HTML (<strong> y <em> para dar énfasis y cursiva). innerHTML permite insertar y manipular HTML dentro de un elemento.


// Crear un nuevo elemento (segundo ejemplo)
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo párrafo.';
document.body.appendChild(nuevoParrafo);
// Usamos document.createElement('p') para crear un nuevo párrafo. Luego le añadimos texto usando textContent, y finalmente lo agregamos al DOM con appendChild, lo que lo coloca al final del cuerpo del documento.




//____________________Modificación de Estilos (CSS)_______________________
//teoría: Podemos cambiar el estilo de los elementos de forma dinámica con la propiedad style. 

const titulos = document.getElementById('titulo');
  titulos.style.color = 'blue'; // Cambiar color directamente

//ejemplo Cambiar múltiples estilos (tamaño de fuente, color y alineación)
const parrafo = document.getElementById('descripcion');
parrafo.style.fontSize = '20px'; // Cambia el tamaño de la fuente
parrafo.style.color = 'green';   // Cambia el color del texto a verde
parrafo.style.textAlign = 'center'; // Centra el texto





  //______________________Manejo de Eventos
//Teoría: Un evento es una acción que ocurre en la página web, como un clic, el paso del ratón sobre un elemento, la escritura en un campo de texto, etc. JavaScript nos permite "escuchar" estos eventos y ejecutar funciones en respuesta a ellos, usando el método addEventListener().
  //  
// Uso de addEventListener() para escuchar eventos.
// Crear interactividad básica a través de eventos.

// Algunos ejemplos comunes de eventos incluyen:

// click: cuando un usuario hace clic en un elemento.
// mouseover: cuando el usuario mueve el mouse sobre un elemento.
// keydown: cuando una tecla es presionada.
// submit: cuando un formulario es enviado.




// Ejercicio 1: Hacer que un botón cambie el color de fondo al hacer clic.

const botones = document.getElementById('boton');
 //primer ejemplo de eventos 
  botones.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightgreen';
  });

  // El método addEventListener() se utiliza para asociar una función a un evento específico en un elemento. Es una forma flexible y moderna de manejar eventos



//segundo ejemplo de eventos 

const mostrarMensajeBtn = document.getElementById('mostrar-mensaje');
// mostrarMensajeBtn selecciona el botón con id="mostrar-mensaje" para poder "escuchar" los clics que se hagan en él.
const mensaje = document.getElementById('mensaje');
// mensaje selecciona el párrafo con id="mensaje", que actualmente está oculto. Vamos a manipular su estilo para hacerlo visible cuando ocurra un clic.


mostrarMensajeBtn.addEventListener('click', () => {
    mensaje.style.display = 'block';});
    // Usamos addEventListener('click', ...) para que la función asociada se ejecute cuando el usuario haga clic en el botón.
    // Cuando el botón es clickeado, el estilo del párrafo cambia: mensaje.style.display = 'block';. Esto cambia el estilo CSS de display de none a block, lo que hace que el mensaje, que estaba oculto, ahora se muestre en la página.
    //
    //
    //
    //
    //

// tercer ejemplo de eventos
    const boton = document.getElementById('cambiar-titulo');

boton.addEventListener('click', () => {
    titulo.textContent = '¡Título cambiado de nuevo!';
});

//ultimo ejemplo que usamos un botón para cambiar el color del texto de un párrafo
const boton2 = document.getElementById('cambiar-color');
const texto = document.getElementById('texto');
//
//
// Añadir evento de clic
boton2.addEventListener('click', () => {
  // Comprobar el tamaño actual del texto
  if (texto.style.color === 'black' ) {
    // Si el color es negro o no está definido, cambiarlo a rojo
    texto.style.color = 'red';
  } else {
      // Si ya es red, volver a negro
      texto.style.color = 'black';
  }
});