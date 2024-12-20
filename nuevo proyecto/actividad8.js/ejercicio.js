//Si quisiera ir a comprar 150 gramos de queso a mi fiambrería de confianza,
//tendría que tener en cuenta las siguientes variables (no pensemos en ellas 
//solo como factores externos, sino como valores de lo cotidiano a tener en 
//cuenta)
//Primero tenemos que ver la temperatura en el exterior, eso nos va a 
//determinar la ropa.
//1. Temperatura (número)
//También deberíamos prestar atención a si llueve o no llueve.
//2. ¿Está lloviendo? (booleano)
//Cuando salga de mi casa, si vivo en un edificio en algún piso, tendré que ver 
//en qué piso se encuentra el ascensor. Si vivo en una casa, esta variable no 
//es necesaria
const prompt = require ("prompt-sync")({sigint: true});
let temperatura = parseFloat(prompt("que temperatura hace? "));
let clima = prompt ("esta lloviendo?");
 if (temperatura <=14){
    console.log("lleva un abrigo");
 } else if( temperatura >=20){
    console.log("usa protector solar");
 }