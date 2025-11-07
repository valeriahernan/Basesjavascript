/* comentarios de multilínea */

//variables
let nombre = "Valeria";
console.log(nombre);

let edad = 25;
edad = 38;
console.log(edad);

let esEstudiante = true;
console.log(esEstudiante);

const pais = "Chile";
// pais = "Brasil"; no se puede modificar una constante

/* reglas para nombrar variables */
//ejemplos válidos de nombres de variables
let apellido;   //undefined
let _contador; 
let $precioTotal;
let numeroDeEstudiantes = 30;

//tipos de datos de las variables

let saludo = "Hola como estas? - 12"; //string o textoos
let numero = 30; //número
let decimal = 2.15; //número decimal
let flag = true; //booleano (true o false)
let vacio = null; //valor nulo
let indefinido; //undefined

console.log(typeof saludo);
console.log(typeof numero);
console.log(typeof decimal);
console.log(typeof flag);
console.log(typeof vacio);
console.log(typeof indefinido);

//concatenación de variables
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo: " + nombreCompleto);

//plantillas literales (template literals)
let presentacion = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(presentacion);

//operaciones matemáticas
let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);   
