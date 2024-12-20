//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes
const prompt = require("prompt-sync")({sigint: true});
const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 54;
let numero = parseFloat(prompt("ingrese un numero: "));
if (numero <= RANGO_MAXIMO && (numero >= RANGO_MINIMO)){
    console.log("esta dentro del rango estipulado");
} else {
    console.log("no esta dentro del rango estipulado");
} 