const prompt = require ("prompt-sync")({sigint: true});
let numero = parseFloat (prompt ("ingrese un numero: "));
let doble = numero * 2;
console.log("el doble de tu numero es: " + doble);
