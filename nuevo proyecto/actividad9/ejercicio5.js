//Ejercicio 5:
//Escribe un programa que pida al usuario que ingrese tres números y 
//determine cuál es el mayor de los tres.
const prompt = require("prompt-sync")({sigint: true});
let ingreso = parseFloat(prompt( " ingrese un numero: "));
let ingreso1 = parseFloat(prompt( " ingrese un numero: "));
let ingreso2= parseFloat(prompt( " ingrese un numero: "));
if (( ingreso > ingreso1) && (ingreso > ingreso2 )){
    console.log("este es el mayor: ");
} else if (( ingreso1 > ingreso) &&( ingreso1 > ingreso2)){
    console.log("el segundo numero es el mayor");
} else if((ingreso2 > ingreso) && (ingreso2 > ingreso1)) {
    console.log("el tercer numero es el mayor");
}