const prompt = require ("prompt-sync")({sigint: true});
let numero = parseFloat(prompt("ingrese un numero: "));
if (numero % 2 === 0) {
    console.log("el numero es par");
} else {
    console.log("el numero es impar");
}