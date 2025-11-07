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

// objeto persona
let persona = {
nombre: "Carlos",
apellido: "Perez",
edad: 30
};

console.log(persona);

// arreglo de números
let compras = [Pan, Leche, Huevos, Frutas];
console.log(compras);
console.log(compras[0]); //acceder al tercer elemento del arreglo