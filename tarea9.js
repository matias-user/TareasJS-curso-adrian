// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

//aeiou.
prompt
const palabra = prompt('Ingresar una palabra');

console.log(palabra.length)//La longitud de la palabra.

//Encontrar las vocales.
const arrayPalabra = palabra.split('');//Convertir toda la en un array de letras.

let contadorVocales = 0;
let contadorConsonantes = 0;

const arrayConsonanteVocal = arrayPalabra.map( letra => { //retornar el ultimo objeto tendra los valores finales
    switch(letra){                                  //de contadorVocales y consonantes.
        case "a": contadorVocales++;
        break;
        case "e": contadorVocales++;
        break;
        case "i": contadorVocales++;
        break;
        case "o": contadorVocales++;
        break;
        case "u": contadorVocales++;
        break;
        default: contadorConsonantes++;
        break;
    };
    return {
        contadorVocales, contadorConsonantes
    }
});

console.log(arrayPalabra);

console.log( `Contador de consonantes: ${arrayConsonanteVocal[arrayConsonanteVocal.length - 1 ].contadorConsonantes} 
Contador de vocales: ${arrayConsonanteVocal[arrayConsonanteVocal.length - 1 ].contadorVocales}
`);

