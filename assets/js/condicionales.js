//condicionales


//ejemplo de IF

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad, o sea puedes votar :D");
}   

else {
    console.log("Eres menor de edad, no puedes votar mijo :(");
}       

if (false) {
    //hace alogo
} else if (false)
{
    //hace otra cosa
} else {
    //hace otra cosa má
}   

if (true) {
    console.log("se cumple la condición");
}   else {
    console.log("no se cumple la condición");

}

if (false)
  console.log("una sola linea del if");
else
  console.log("una linea del else");

//ejemplo con AND y OR
let hora = 10;
if (hora < 12 && hora >= 6) {
    console.log("Buenos días");
}       
else if (hora < 18 && hora >= 12) {
    console.log("Buenas tardes");
}      
else if (hora <= 24 && hora >= 18) {
    console.log("Buenas noches");
}       
else {
    console.log("Hora no válida");
}       

if (false)
console.log("una sola linea del if");
else
console.log("una linea del else");
// ejemplo con operadores lógicos
let usuario = "admin";
let password = "1234";
if (usuario === "ADMIN" && password === "1234") {
console.log("Acceso permitido");
} else {
console.log("Acceso denegado");
}