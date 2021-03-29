// 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, 
// ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, 
// si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: 
// -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

const arrayLleno = [];
const arrayPar = [];
const arrayImpar = [];

while( arrayLleno.length < 6){
    const numAzar = Math.floor( Math.random() * 10 );
    arrayLleno.push( numAzar );
};

const nuevoArray= arrayLleno.map( numero => {
    numero = numero * Math.floor( Math.random() * 10 )
    
    if( numero % 2 === 0 ){
        arrayPar.push( numero)
    }else {
        arrayImpar.push( numero)
    }
    return numero;
});

console.log(arrayLleno);
console.log(nuevoArray);
console.log(arrayPar);
console.log(arrayImpar);