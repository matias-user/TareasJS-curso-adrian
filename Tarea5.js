//Ejercicio numero 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
// !5 = 5*4*3*2*1 = 120
let numAzar = Math.floor( Math.random() * 10 );
console.log(numAzar)

const array = [];

let num5 = numAzar;
let number = numAzar;
let resultado = numAzar;

for( i = 0; i < numAzar; i++ ){ // Este for se recorrera 5 veces.

    array.push( number );

    number = number - 1;
    resultado = resultado * number; 

    if(number > 1){
        console.log(resultado)

    };
};
