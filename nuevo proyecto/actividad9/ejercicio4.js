//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.
const prompt = require("prompt-sync")({sigint: true});
let nombre = prompt( "ingrese su nombre: ");
let nombre1 = "camila" 
if (nombre1 == nombre){
    console.log("que casualidad!");
} else {
    console.log("que lindo nombre")
}