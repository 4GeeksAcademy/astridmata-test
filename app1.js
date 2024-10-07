// nos vamos a concentrar en las que vamos a trabajar de forma mas recurrente
// dependiendo del contexto podrian cambiar de nombre pero eso lo vemos mas adelante

// funcion de declaracion
// funcion de expresion
// funciones anonimas
// funciones de flecha


// 1- funcion de declaracion:

// Características:

// Tienen nombre.
// Son elevadas (hoisting).


// function nombreFuncion() {
//     // logica que yo voy a usar
// }
// esta estructura me ayuda a encacsular este codigo por si lo quiero reutilizar

suma() //puedo llamarla desde cualquier lugar eso significa que es elevada
// declaracion de funciones
function saludar() {
    console.log("Hola!");
    
}


function suma() {
    let resultado = 4+5
    console.log(resultado);
    
}

// llamar a la funcion o invocar
saludar()

// 2 vamos con las funciones de Expression, que no son mas que una funcion de anonima guardada en un espacio de memoria, aqui vamos a ver dos en una.

// recuerden los tipo de datos:
// let nombre = "alexis"
// let numero = 2
// let colores = ["rojo", "verde"]

// las funciones son tipos de datos por lo tanto puedo guardarlo en un espacio de memoria y asignarle una funcion anonima, es decir que no tiene nombre, y adpta el nombre del espacio de memoria donde la estoy guardando, y por eso se conoce como funcion de expresion. que sigue siendo una funcion pero tienen una forma distinta de representar
// A diferencia de las funciones de declaración, no son elevadas, por lo que no puedes llamarlas antes de su definición.

let bailar= function (){
console.log("estoy bailando");
}
bailar()
// Pueden ser  nombradas. lo cual puede ser útil para depuración, pero en general el nombre de la función es opcional.
const nombre = function persona() {
    console.log("Alexis");
  };
nombre()


// funcion flecha: son una funcion anonima y me ofrecen una estructura o sintaxis mas customizada, es mas linda. a las funciones anonimas le vamos a sacar la palabra reservada function y entre el parentesis y la primera llave le vamos a colocar una flecha


const cantar = () => { 
    console.log("estoy cantando!");
  };
cantar() // No son elevadas.

// Ejemplo con retorno implícito (para funciones de una sola línea):
const restar = (a, b) => a - b;
console.log(restar(3, 2));  
console.log(restar(10, 5));  //ejemplo de que se puede llmar ala funcion dos veces 

// vamos con un ejemplo usando return, Si necesitas que el valor esté disponible fuera de la función, entonces debes usar return. Si solo quieres mostrarlo en la consola, console.log() es suficiente

// imaginense que todo lo que esta dentro de las llavez son linderos, y solo puedo extraerla usando console.log, que es lo que hemos probado hasta ahora, pero si yo necesito recuperar ese dato para ser usado posteriormente debo usar return

//Es muy importante recordar que una vez que use la instrucción return, la función dejará de ejecutarse, si hay algún código después de esa instrucción, nunca se ejecutará.


const multiplicar = (x, y) => {
    return x * y;
  };
  console.log(multiplicar(4,5)) // En este caso, el return hace que el valor 20 esté disponible donde se llamó la función. estamos usando el valor que retorna la función solo para mostrarlo en la consola, pero no hago nada más con ese valor después.

  // Almacena el resultado en una variable
  let resultado = multiplicar(4, 5);  // La función sigue devolviendo 20 como antes, pero ahora en lugar de simplemente imprimirlo, almacenas ese valor en la variable resultado.   Ahora realmente estamos aprovechando el return, porque guardamos el valor devuelto por la función y puedes usarlo en otros lugares de tu código, sin necesidad de volver a calcularlo.
  
  console.log(resultado);  

  //cuando les digo que pueden reutilizar este valor en otra parte del codigo me refiero a esto:
  
// Reutilizamos el valor de 'resultado' en otra parte del código
let sumar = resultado + 10;  // Sumamos 10 al resultado almacenado
console.log("Resultado de la suma usando el valor anterior:", sumar);

// ¿Por qué es útil reutilizar valores?
    // Evita recalcular: Si ya calculaste un valor (como multiplicar(4, 5)), no necesitas volver a calcularlo; puedes guardarlo en una variable y usar ese valor tantas veces como sea necesario.
    // Modificación de resultados: Puedes hacer nuevos cálculos o comparaciones basándote en el valor original.
    // Optimización del código: Reutilizar variables mejora la eficiencia de tu código, en lugar de llamar a la función repetidamente para obtener el mismo valor.

//lo que les queria mostar es que la funcion flecha cuando el codigo es de una sola linea tiene la opcion de evitar colocar el retur peo funciona de igualmanera, si y solo si yo saco las llavez. 

let caminar =()=> "estoy caminando"

console.log("de 7 a 8 am yo:", caminar());
// Almacenamos el resultado de la función en una variable
let actividad = caminar();  // Llamamos a la función y guardamos su retorno en "actividad"

// Reutilizamos el resultado varias veces
console.log("En la mañana, yo: " + actividad + " " + resultado + " minutos y luego hago otras cosas."); //aca les muestro el principio de concatenacion 
//La concatenación es una forma de combinar diferentes cadenas de texto. En JavaScript, podemos utilizar el símbolo "+" para unir texto y crear una nueva cadena. Esto es particularmente útil cuando queremos construir mensaje


//lo que pasa es que esta figura es mas compleja para cuando estamos empezando. les recomiendo empezar con la que les sea mas facil de leer (les muestro la de arriba)

//VAMOS A DEFIR LOS PARAMETROS 

//Los parámetros en JavaScript son variables que se utilizan para pasar información a las funciones. Cuando defines una función, puedes especificar parámetros que le permiten recibir valores externos y utilizarlos dentro de la función. Esto hace que las funciones sean más flexibles y reutilizables, ya que puedes ejecutar la misma función con diferentes valores.

function dividir (a, b) { // 'a' y 'b' son parámetros
  return a / b; // 'a' y 'b' son parámetros
}
let result = dividir(10, 2); // 5 y 3 son argumentos
console.log(result);

//Argumentos: Los valores que se pasan a la función al momento de llamarla se llaman argumentos. Son los valores que reemplazan a los parámetros.

//Los parámetros son fundamentales para la creación de funciones en JavaScript porque permiten que las funciones sean más flexibles y reutilizables. Puedes utilizar diferentes valores al llamar a la misma función, lo que permite realizar tareas similares con diferentes entradas.

//ESTAS SON FUNCIONES QUE NOSOTROS ESTAMOS CREANDO PERO TIENEN QUE SABER QUE ASI COMO HAY PALABRAS RESERVADAS EN JS QUE NO SE PUEDEN USAR PARA DECLARAR VARIABLESTAMBIEN EXISTEN FUNCIONES NATIVAS DE JS,  para realizar tareas comunes Estas funciones son parte del núcleo de JavaScript y están disponibles sin necesidad de importar bibliotecas adicionales

// Math.floor(x): Redondea x hacia abajo al entero más cercano.
// Math.random(): Devuelve un número aleatorio entre 0 (incluido) y 1 (excluido).
// Array.prototype.push(): Agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
// Array.prototype.pop(): Elimina el último elemento de un arreglo y lo devuelve.
// alert(): Muestra un cuadro de alerta con un mensaje y un botón de "Aceptar".
// prompt(): Muestra un cuadro de diálogo que solicita al usuario que ingrese un valor.
// console.log(): Muestra información en la consola.
// alert(result);
// muchas de las funciones nativas de JavaScript, desde matemáticas y manipulación de arreglos hasta manejo de fechas y datos JSON. Estas funciones son fundamentales para trabajar eficazmente con JavaScript y desarrollar aplicaciones web interactivas.

window.onload = () => {
  let pronoun = ["A", "the"];
  let subject = ["jogger", "reacon", "dog", "cat"];
  let action = ["took my", "threw my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "bike"];
  let where = ["on the street", "on my house", "on my job", "on my work"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};

alert(window.onload());


//Investigar: Tomen unos minutos para investigar cómo mostrar contenido en la página web utilizando innerHTML y document.querySelector. ¡Luego, lo aplicaremos en nuestro ejercicio del generador de excusas!"