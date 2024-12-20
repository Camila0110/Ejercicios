const prompt = require ("prompt-sync")({sigint: true});
let numero1 = parseFloat(prompt("ingrese un numero: "));
let nuemro2 = parseFloat(prompt("ingrese otro numero: "));
let suma = numero1 + nuemro2;
console.log("la suma de los numero es: "+ suma);