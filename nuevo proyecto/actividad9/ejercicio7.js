//Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
//libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
//kg a libras, Pista: 2.20462
const prompt = require ("prompt-sync")({sigint: true});
let usuario = parseFloat(prompt( "ingrese su peso en kilogramos: "));
let convercion = ( usuario * 2.20462);
 console.log( `este es su peso en libras: ` + convercion);

