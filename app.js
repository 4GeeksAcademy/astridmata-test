// El for loop es el más clásico y flexible. Permite ejecutar un bloque de código un número determinado de veces. La estructura básica es:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    

// Inicialización (let i = 0): define la variable de control.
// Condición (i < array.length): verifica si el bucle debe continuar.
// Incremento (i++): se ejecuta después de cada iteración.
// Uso: Se utiliza cuando sabes cuántas veces quieres iterar un bloque de código.

// Ejemplo 1: Iterando un array de números
// Supongamos que tienes un array de números y quieres imprimir cada número multiplicado por 2.
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] * 2);
}


// Ejemplo 2: Recorrer un string carácter por carácter
// Puedes usar un for para iterar sobre cada carácter de un string:

const palabra = "JavaScript";

for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}
// En resumen, este ejemplo muestra cómo recorrer un string en JavaScript usando un bucle for, accediendo a cada carácter por su índice y imprimiéndolo en la consola. Es una forma común de trabajar con strings en JavaScript, y se puede aplicar en diversos contextos, como contar caracteres, buscar un carácter específico, o transformar la cadena de texto.

//---------------------------------FOR ANIDADO -----------------------------------
// Un bucle for anidado es un bucle for dentro de otro bucle for. Se utiliza cuando necesitas recorrer una estructura bidimensional (como una matriz o tabla), o cuando quieres realizar operaciones en varias combinaciones de elementos.

// Imaginen que tenemos una lista de frutas y para cada fruta queremos escribir varios colores posibles. Vamos a recorrer la lista de frutas y, por cada fruta, vamos a recorrer los colores. Esto se hace con un for anidado.

const frutas = ['Manzana', 'Banana', 'Uva'];  // Lista de frutas
const colores = ['Rojo', 'Verde', 'Amarillo'];  // Lista de colores

// Bucle exterior: recorre cada fruta
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta: ${frutas[i]}`);
  
  // Bucle interior: recorre cada color
  for (let j = 0; j < colores.length; j++) {
    console.log(`  Posible color: ${colores[j]}`);
  }
}

// ¿Qué hace este código?
// Bucle exterior: Recorre la lista de frutas (primero la manzana, luego la banana, luego la uva).
// Bucle interior: Por cada fruta, recorre la lista de colores (rojo, verde y amarillo) y muestra cada color posible.

// Para cada fruta, el bucle dice su nombre con console.log(Fruta: ${frutas[i]}).
// Bucle interior:
// Por cada fruta, recorremos la lista de colores.
// Mostramos cada color posible para la fruta con console.log( Posible color: ${colores[j]}).
// ¿Por qué funciona así?
// Primero, el bucle exterior toma la primera fruta, Manzana.
// Luego, el bucle interior muestra todos los colores (Rojo, Verde, Amarillo) para la manzana.
// Después, el bucle exterior sigue con la segunda fruta, Banana, y el bucle interior muestra de nuevo todos los colores para la banana.
// Finalmente, el bucle exterior toma la última fruta, Uva, y el interior muestra los colores para la uva.
// Resumen sencillo:
// Un for anidado es como tener tareas dentro de otras tareas. En este ejemplo, por cada fruta (bucle exterior), revisamos todos los colores posibles (bucle interior). Así hacemos una combinación completa de frutas con colores.




//---------- ¿Qué es forEach? ----------------------------
// El método forEach es una forma más sencilla de iterar sobre los elementos de un array en comparación con un bucle for. Ejecuta una función para cada elemento del array y no devuelve un valor (a diferencia de map, que devuelve un nuevo array). Simplemente recorre el array y aplica la función a cada elemento.

// array.forEach((elemento, índice, array) => {
//     // Código a ejecutar por cada elemento
//   });

// elemento: El valor de cada elemento del array.
// índice (opcional): La posición del elemento dentro del array.
// array (opcional): El array original sobre el que estás iterando

// Ejemplo 1: Sumar todos los números en un array
// Puedes usar el forEach para recorrer un array y realizar alguna operación como sumar todos los valores.
const sumanumeros = [10, 20, 30];
let suma = 0;

sumanumeros.forEach((numero) => {
  suma += numero;
});

console.log('Suma total:', suma);

// Ejemplo 2: Recorrer un array de objetos
// El forEach es útil cuando trabajas con arrays de objetos. Supón que tienes un array de personas y quieres imprimir el nombre de cada persona.

const datospersonas = [
    { nombre: 'Ana', edad: 28, apellido: "lopez" },
    { nombre: 'Luis', edad: 22, apellido: "lopez" },
    { nombre: 'Maria', edad: 32, apellido: "lopez" }
  ];
  
  datospersonas.forEach((persona) => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
  });

//   forEach es útil para iterar sobre arrays de una manera simple y clara.
//   No devuelve un valor, solo ejecuta una función para cada elemento del array.
//   Se usa cuando quieres hacer algo con cada elemento de un array, pero no modificar o transformar el array (para eso, usarías map).

//------------------------------- ¿Qué es while?-------------------------------------
// El bucle while ejecuta un bloque de código mientras una condición se mantenga verdadera (true). La condición se evalúa antes de ejecutar cada iteración, por lo que si la condición es false desde el principio, el código dentro del bucle no se ejecutará ni una sola vez.

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++; // Incrementa el contador en 1
}
// En este ejemplo, el bucle se repite mientras contador sea menor que 5. Cada vez que el bucle se ejecuta, contador se incrementa en 1.



// Ejemplo 2: Condición basada en una entrada de usuario
// Imaginemos que queremos pedirle al usuario que ingrese una contraseña hasta que acierte la correcta.
let contraseñaCorrecta = "12345";
let contraseñaIngresada = "";

while (contraseñaIngresada !== contraseñaCorrecta) {
  contraseñaIngresada = prompt("Introduce la contraseña:");
}

console.log("¡Contraseña correcta!");

// Salida (dependerá del input del usuario)
// Este bucle continuará solicitando la contraseña hasta que el usuario ingrese "12345".



/////////// CUIDADO CON ESTO Si no actualizas la condición dentro del bucle, puedes crear un bucle infinito. Esto significa que el bucle seguirá ejecutándose para siempre, lo cual puede causar problemas en tu programa.¡Recuerda siempre modificar la variable que controla la condición dentro del bucle!



//___________________ Diferencias entre while y for_______________________
// while: Se usa cuando no sabes cuántas veces vas a necesitar repetir el bucle, y quieres que se repita mientras una condición sea verdadera.
// for: Es más adecuado cuando sabes cuántas veces vas a iterar (por ejemplo, cuando tienes un número definido de elementos en un array).

// Resumen
// El bucle while es útil cuando no sabes con certeza cuántas veces debe repetirse el código. La clave es asegurarte de que la condición eventualmente cambie dentro del bucle para evitar bucles infinitos.

//  -------NOS FALTA  map, filter y find PERO ELLOS son métodos de array, no exactamente "loops", aunque internamente funcionan de forma similar a un bucle (iteran sobre cada elemento del array). La diferencia clave es que son más declarativos y están diseñados para operaciones específicas en arrays. Vamos a ver cada uno en detalle y aclarar en qué se diferencian de los loops.

// 1. ------------------map------------------------
// map crea un nuevo array a partir de aplicar una función a cada elemento del array original. En lugar de modificar el array original, devuelve un array nuevo con los resultados.

// Propósito: Transformar cada elemento del array.
// Resultado: Un nuevo array con los elementos transformados.

// Ejemplo:
// Convertir un array de números en otro array con los números multiplicados por 2.

const digitos = [1, 2, 3, 4, 5];

const numerosMultiplicados = digitos.map(numero => numero * 2);

console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]
// Notas:

// map siempre devuelve un array del mismo tamaño que el array original.
// No modifica el array original, sino que crea uno nuevo.

// --------------------2. filter--------------------------
// filter crea un nuevo array con los elementos que cumplen una condición. Recorre cada elemento del array y si la condición es true, el elemento se incluye en el nuevo array.

// Propósito: Filtrar elementos que cumplan una determinada condición.
// Resultado: Un nuevo array con los elementos que pasaron el filtro.

const valores = [1, 2, 3, 4, 5, 6];

const numerosPares = valores.filter(numero => numero % 2 === 0);

console.log(numerosPares); // [2, 4, 6]
// Notas:

// filter devuelve un array más pequeño (o igual) que el original.
// Si ningún elemento pasa el filtro, devuelve un array vacío.

// 3. -----------------------find-----------------------------
// find devuelve el primer elemento que cumple con una condición. A diferencia de filter, que devuelve todos los elementos que cumplen la condición, find solo devuelve uno. Si no encuentra ningún elemento, devuelve undefined.

// Propósito: Encontrar el primer elemento que cumple con una condición.
// Resultado: El primer elemento que cumple la condición, o undefined si no se encuentra.

const digit = [1, 2, 3, 4, 5];

const primerNumeroMayorQueTres = digit.find(numero => numero > 3);

console.log(primerNumeroMayorQueTres); // 4
// Notas:

// find devuelve solo el primer elemento que cumple la condición.
// Si ningún elemento cumple la condición, devuelve undefined.

//------------- ¿Son lo mismo que los loops?-----------------------
// No exactamente, aunque internamente iteran sobre los elementos del array, son métodos más declarativos que los bucles tradicionales como for o while. En lugar de escribir la lógica de la iteración manualmente (como en un for), usas estos métodos para expresar claramente lo que quieres hacer con el array.

// ----------------Diferencias con los loops:-----------------------
// map, filter y find son métodos de arrays, y se aplican directamente sobre arrays.
// Estos métodos son declarativos, lo que significa que simplemente defines qué quieres hacer, no cómo hacerlo (el motor de JavaScript se encarga de los detalles).
// Los bucles (for, while) son imperativos: tú controlas cada paso de la iteración y cómo se maneja cada elemento.
// Devuelven nuevos arrays (map, filter) o elementos específicos (find), mientras que un bucle for o while no devuelve un array o resultado a menos que lo especifiques manualmente.

// la clase real 

console.log("lunes 7");

//For 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//ejemplo 1  
let numeros=[1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] *2 );
    
}

//ejemplo 2:

let palabra = "Javascript"

for (let index = 0; index < palabra.length; index++) {
    console.log(palabra[index]);
        
}

// for anidado

let frutas = ["manzana", " banana", "uva", "naranja"] 
let colores =["rojo", "verde", "amarillo"]

for (let index = 0; index < frutas.length; index++) {
    console.log(`fruta: ${frutas[index]}`);
    
    for (let j = 0; j < colores.length; j++) {
        console.log(`posibles colores: ${colores[j]}`);
        
    }
}

// forEach

let datosPersonas = [{nombre:"ana", edad:22},{nombre:"carlos", edad:24},{nombre:"luis", edad:30}]
datosPersonas.forEach((persona)=>{
    console.log(`Nombre: ${persona.nombre}`);
    
})

//ejemplo 2

let sumaNumeros=[23, 45, 78, 12, 1, 9]
let suma = 0
sumaNumeros.forEach((numeros)=>{
    suma += numeros
})
console.log("suma total:", suma);

//while

let contador = 0
// while(contador < 5){
//    console.log(contador);
   
//     contador ++ // incrementar en 1 el valor 
// }

while(true) {
    console.log(`contador: ${contador}`);
    if (contador===10){
        console.log("deteniendo el bucle");
        break
    }
contador ++    
}
console.log("el bucle se ha detenido ");



//otro ejemplo
// let contraseña = "12345"
// let contraseñaIngresada= ""

// while(contraseñaIngresada !== contraseña){
//     contraseñaIngresada = prompt("introduce la contraseña correcta")
// }
// console.log("contraseña correcta!!");

//map filter find 

//map

let digitos = [1,7,3,9]
let numerosMultiplicados = digitos.map(numeros => numeros*2 )
console.log(numerosMultiplicados);

// filter 

// let valores= [1,2,3,4]
// let numerosPares = valores.filter(numero => numero % 2 === 0)

// console.log(numerosPares)


// // find

// let primerNumeroMayorQueTres= valores.find(numeros=>numeros >3)
// console.log(primerNumeroMayorQueTres);

// usando for ordenar un array de numeros de mayor a menor

let valores = [5, 8, 1, 3, 7, 10, 2]
//Bubble sort
for (let index = 0; index < valores.length; index++) {
    for (let j = 0; j < valores.length -1; j++) {
        if (valores[j] < valores[j+1]){
            let temp= valores[j]
            valores[j]= valores [j +1]
            valores [j+1] = temp
        }
        
    }
    
}
console.log("array ordenado demayor a menor:", valores);

///otro ejemplo 
valores.sort(function (a, b) {
    return b -a 
})

// valores.reverse()
console.log("array ordenado:", valores);


// ejemplo corto 
// let numeros = [34, 6, 67, 254, 92, 9]
// Ordenar de menor a mayor:
// let menorAMayor = numeros.sort((a, b)=> a-b)

// Ordenar de mayor a menor:
// let mayorAMenor = numeros.sort((a, b)=> b-a)
// Solución corta.
// Por debajo es probable que haga exactamente lo mismo.
// Ya que a y b hacen referencia a dos elementos del array.
// El que está tomando en el momento y el siguiente.


let autos = [
    {tipo:'Volvo', año:2016},     {tipo:'Saab', año:2001},     {tipo:'BMW', año:2010}, {tipo:'BMW', año:2010}];
    autos.sort(function(a, b) {return a.año - b.año});
    console.log(autos); // --> [ {tipo: 'Saab', año: 2001}, {tipo: 'BMW', año: 2010}, {tipo: 'Volvo', año: 2016} ]
