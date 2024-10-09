//____tipos de datos: string, numericos, booleanos, null, undefined, array, funciones, odjetos

//____ya nosotros hemos trabajado en las practicas con varios de estos tipos de datos, trabajamos con array y funciones que son los mas complejos pero hoy nos toca hablar de objetos con mas detalles, tambien vamos a trabajar con templete literals y operadores ternarios.

//____________________objetos_____________________
// tiene una estructura {propiedad: "valor"}

//___ Es una de las formas principales de organizar y gestionar datos en el lenguaje. Los objetos en JavaScript pueden contener tanto propiedades (atributos con valores) como métodos (funciones asociadas al objeto).
//siempre delimitado por las llavez, donde voy a empezar a enumerar pares de propiedades y valores. 
//Acceso a propiedades:
let persona = {
  nombre: "Juan",
  edad: 30,
  profesion: ["Desarrollador", "Teacher"],
  direccion: {
    calle: "Calle Falsa 123",
    ciudad: "Buenos Aires"
  },
  saludar: function() {   
    console.log("Hola, mi nombre es " + this.nombre); // En JavaScript, la palabra clave this es un mecanismo que hace referencia al contexto de ejecución actual, es decir, al objeto sobre el cual se está invocando el código. El valor de this cambia dependiendo de cómo y dónde se llama una función o se accede a un método.
  
  },
  "fecha de nacimiento": "09 de octubre de 1994" , //esto lo agrego luego 
};
console.log(persona);
//ya sabemos declararlos, vamos a consultarlo:
// ___Puedes acceder a los valores de las propiedades usando notación de punto (.) o notación de corchetes ([]).
console.log(persona.nombre); // "Juan"  
//____si yo quiero acsedes a teacher:
console.log(persona.profesion[1]); //"teacher"


//___ahora como consulto saludar?? recuerden que esto es una funcion, ya habiamos visto como hacimaos para activar o llmar a una funcion 

//___Métodos: Son funciones almacenadas como propiedades dentro del objeto. En el ejemplo, saludar es un método.
//____ lo que pasa es que las funciones cuando viven dentro de un objeto es que cambian de nombre se pasan a conocer como "metodos" funcionan igual, lo que quiero con esto es que cuando lo vean en la documentacion donde les hablaran en lenguaje tecnico ustedes sepan a que se refiere 

//hago el ejemplo de persona.saludar()
//hago la comparacion con console.log()

//___entonces si recuerdan cuando estudiamos los tipos de datos, teniamos datos primitivos y datos tipo objetos, donde estaban los array y los objetos literales
// ____y es que si leen la definicion de js dice que es un lenguaje de tipado debil y que nacio siendo orientado a la web y que ademas esta orientado a objetos, por lo que muchas de sus figuras son objetos nativos. como es el caso del console.log

//volvemos al ejemplo y muestro los metodos que tiene console y entre ellos log que es el que mas usamos.

//____entonces los array son objetos debajo del capo (camuflados)
//creo array 
frutas= ["manzana", "naranja"]
console.log(frutas);

//muestro el array personas.profesion y comparo 0 y 1 con las propiedades de arriba nombre y edad.
// luego muestro el length que tambien es una propiedad y tiene un valor

//___ cuando queremos consultar el largo hacemos  fruta.length  y eso es igual a cualquiera de los de arriba
//___ entonces cuando vimos los metodos de array (map, filter, find, sort y el reverse que se aplican solo a array) haciamos referencia a objetos como por ejemplo: a este array le quiero agregar la fruta fresa y uso push
frutas.push("fresa")
console.log(frutas);
//___como yo se donde esta esa informacion? en la documentacion y ademas podriamos ver todos los metodos disponibles
//
// [[Prototype]]:Array(0)

//__entonces porque hay dos formas de consultar un objeto?, con . y con [], 
// ___Ventajas:
// ___Sencillo y limpio: Es fácil de leer y escribir.
// ___Sintaxis clara: Perfecto para propiedades con nombres sencillos.
// ___Limitaciones:
// ___No se puede usar si el nombre de la propiedad tiene caracteres especiales, números al principio, espacios, o es un identificador dinámico (es decir, el nombre de la propiedad es una variable).

// ____ahora con [] Esta forma permite más flexibilidad, ya que puedes acceder a propiedades utilizando una cadena de texto (string) o una variable. Es útil cuando el nombre de la propiedad no es válido como identificador de JavaScript, o cuando el nombre de la propiedad es dinámico.
//consultamos asi: persona["fecha de nacimiento"]







//______________________________vamos a hablar de los templete literals
//Los template literals (o plantillas literales) en JavaScript son una forma más avanzada y flexible de manejar cadenas de texto. los template literals permiten interpolar variables y expresiones directamente dentro de las cadenas, así como crear cadenas multilínea de manera más sencilla. en otras palabras concatenar de una forma mas rapida 

/////////////////////ESTO EN LA CONSOLA///
//"hola" + "chao"
let texto = "como estas"
// "hola " + texto

// `hola ${texto}`;
//___LES ESTOY MOSTRANDO ESTO PUES VAN A HACER HOY UN EJERCICIO QUE USA ESTA FORMA Y QUERIA QUE LA CONOCIERAN PARA QUE NO FUERA TAN COMPLICADO LA LECTURA DEL CODIGO QUE VAN A VER HOY. 


// OTRO EJEMPLO 
const nombre = "Juan";
const edad = 30;

const mensaje = `Hola, mi nombre es ${nombre.toUpperCase()} y tengo ${edad} años.`;
console.log(mensaje); // "Hola, mi nombre es JUAN y tengo 30 años."

//Los template literals son una herramienta poderosa y flexible que mejora el trabajo con cadenas en JavaScript, haciéndolas más expresivas y fáciles de manejar En general, los template literals mejoran la claridad y reducen la necesidad de concatenar.


//___________vamos con los operadores ternarios, que no son mas que otra forma mas senciya de hacer el if, else que ya conocimos de una forma menos verbosa y con otros beneficios. 

let apellido = "Ada"

if (apellido === "Ada") {
  console.log(`Bienvenida ${apellido}`)
  
} else {
  console.log(`no eres Ada, eres: ${apellido}` )
}





//________________________________________________operador ternario 
//estructura: condición ? valorSiVerdadero : valorSiFalso;

//___ condición: La expresión que será evaluada (es el equivalente a la condición en una estructura if).
//___ valorSiVerdadero: El valor que se devuelve si la condición es true.
//___ valorSiFalso: El valor que se devuelve si la condición es false.

apellido === "Ada" ? console.log(`Bienvenida ${apellido}`) : console.log(`no eres Ada, eres: ${apellido}` )

//tiene un return implicito y actua como funcion pero lo importante es que me sirve para hacer un if else con informacion que yo puedo recuperar 
// Resumen: 
//___Ventajas del operador ternario
//__ Conciso: Permite evaluar condiciones en una sola línea, lo que hace el código más compacto.
//__ Expresivo: Se puede usar para evaluaciones rápidas y directas en lugar de estructuras if-else.
//__ Simplicidad: Ideal para condiciones simples donde no se necesita demasiada lógica.

//____ PERO A pesar de su utilidad, hay casos en los que el operador ternario puede hacer que el código sea difícil de leer, especialmente cuando se anidan o cuando la lógica es demasiado compleja. En estos casos, es mejor usar if-else o estructuras de control más claras.
//__ cOMO OTRA Alternativa al ternario TIENEN : && y ||
// Para condiciones simples donde solo necesitas evaluar si algo es true o false, a veces puedes usar los operadores lógicos && (AND) o || (OR).


//ejemplo dentro de una funcion solo para que vean que se ve mas organizado 
function obtenerDescuento(edad) {
  return edad >= 65 ? "Tiene descuento" : "No tiene descuento";
}

console.log(obtenerDescuento(70)); // "Tiene descuento"
//presentar el ejercicio
