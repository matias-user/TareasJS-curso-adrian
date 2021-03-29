// 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no 
// supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
let numero = 0;
let acumulador = 0;
let bandera = 0;
do {
    numero = prompt('Introduce un numero');
    numero = parseInt(numero);

    bandera++;
    acumulador +=  numero;
    alert(acumulador)
    alert(bandera)
}while( acumulador <= 50 );



