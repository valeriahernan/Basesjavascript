// BUCLES EN JAVASCRIPT //

// --- FOR ---
for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i); // Muestra los números del 1 al 5
}

// --- WHILE ---
let contador = 1;

while (contador <= 5) {
  console.log("Contador: " + contador); // Muestra los números del 1 al 5
  contador++;
}

// --- DO WHILE ---
let x = 1; // Se debe declarar antes de usar

do {
  console.log("Valor de x: " + x); // Muestra los valores del 1 al 4
  x++;
} while (x < 5);

// --- FOR OF ---
let frutas = ["Manzana", "Plátano", "Naranja", "Mango"];

for (let fruta of frutas) {
  console.log("Fruta: " + fruta); // Recorre los elementos del arreglo
}

// --- FOR IN ---
let persona = {
  nombre: "Alfredo",
  edad: 39,
  ciudad: "Santiago"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]); // Muestra clave y valor del objeto
}

// --- BUCLE INFINITO (EJEMPLO — NO EJECUTAR) ---
// while (true) {
//   console.log("Se ejecuta siempre");
// }

// --- IMPRIMIR DEL 1 AL 10 ---
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// --- CONTAR HACIA ATRÁS ---
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
