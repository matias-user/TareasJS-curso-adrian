const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let entrada;

do{
    entrada = prompt('Ingresa tu DNI');
}while( entrada.length < 8 )

parseInt(entrada);

const posicion = entrada % 23;

const letra = letras[posicion];

entrada.toString();

const resultado = `${entrada}-${letra}`;
console.log(resultado);
