/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/
class Libro {

    constructor( titulo, autor, year, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
        this.genero = genero;
    };
    mostrarInformacion(){
        return `El libro ${this.titulo} es del año ${this.year} y pertenece al genero ${this.genero}`;
    };

};

const array = [];
let libro;
for( let i = 1; i <= 3; i++ ){
     libro = new Libro( prompt('Introduce el nombre del libro'), prompt('Introduce el autor del libro'),
    prompt('Introduce el año del libro'), prompt('Introduce el genero del libro'));

    array.push( libro);
};

function mostrarLibros(){
    array.forEach( libro => {
        console.log(libro);
    });
};

function ordenarAlfabeticamente(){
    const arrayOrdenado = [];
    array.forEach( libro => arrayOrdenado.push(libro.autor) );
    arrayOrdenado.sort();
    return arrayOrdenado;
};

console.log(libro);
console.log(array)
console.log(ordenarAlfabeticamente()) 