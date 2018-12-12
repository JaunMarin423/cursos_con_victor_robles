'use strict'

var categorias = ['acción', 'terror', 'comedia'];
var peliculas = [' La verdad duele', 'La vida duele', 'Gran torino'];

//Ordenar areglos

//peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
 var elemento = "";
/*do{
    var elemento = prompt("Introduce tu pelicula: ");
        peliculas.push(elemento);
}while (elemento != "ACABAR"); 

peliculas.pop();

console.log(peliculas);*/

//borrar un elemento e concreto de aun array

var indice = peliculas.indexOf('Gran torino')


if (indice > -1) {
    peliculas.splice(indice, 0);

}
//iner join para agregar
var peliculas_string = peliculas.join();
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");


console.log(cadena_array);


