const prompt = require ("prompt-sync")({sigint: true});
let numero = parseFloat (prompt("ingrese un numero: "));
if (numero > 0){
    console.log("el numero es positivo");
} else if (numero < 0) {
    console.log("el numero es negativo");
} else {console.log("el numero es cero");}
