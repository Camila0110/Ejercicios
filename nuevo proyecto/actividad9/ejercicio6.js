//• Ejercicio 6: 
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
//edad. Muestra un mensaje personalizado según el caso.
const prompt = require ("prompt-sync")({sigint: true});
let edad = 18
let mayor = parseFloat(prompt(" ingrese su edad: "));
 if ( mayor >= edad ){
    console.log("puede pasar");
 }else {
    console.log(" usted es menor, no puede pasar");
 }