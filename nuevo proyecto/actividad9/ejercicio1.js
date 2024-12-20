//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales.


const prompt = require ("prompt-sync")({sigint: true});
let numero1 = prompt("ingrese un numero: ");
let numero2 = prompt("ingrese un numero: ");

if (numero1 > numero2){
    console.log("el primer numero ingresado es mayor");
} else if (numero1 < numero2){
    console.log("el segundo numero ingresados es mayor")
} else if ( numero1 == numero2){
    console.log("ambos numeros son iguales")
}



