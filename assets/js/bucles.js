// bucles/

// for
for (let i = 1; i <= 5; i++) {
console.log("Numero: " + i); // 1=1, 1=2, 1=3, 1=4, 1=5, 1=6
}

//ciclo while
let contador = 1;

while (contador <= 5) {
    //contador=1, contador=2, contador=3, contador=4, contador=5, contador=6
    console.log("Contador: " + contador);
    contador++
}

//do while

do {
    console.log("Valor de x: " + x);
    x++;
} while (x < 5); //x=2, x=3, x=4, x=5, x=6

// for of
let frutas = ["Manzana", "Platano", "Naranja", "Mango"];

for (let fruta of frutas) {
    console.log(fruta);
}

//for in
let persona = {
  nombre: "Alfredo",
  edad: 39,
  ciudad: "Santiago"
}

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

//cuidado con los bucles infinitos
/*while (true){
    console.log("se ejecuta siempre");
}*/

//imprimir del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//contar hacia atras
for (let i = 10; i >= 1; i--) {
    console.log(i);
}