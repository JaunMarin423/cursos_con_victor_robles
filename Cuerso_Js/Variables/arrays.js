'use strict'

// Arrays, arreglos ó matrices

var nombre = "juan marin";

var nombres = ["juan", "juan2", "marcos", "santiago"];

var lenguajes = new Array ("PHP", "JS", "GO", "JAVA", "C#", "Pascal");

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introuce el numero correcto, meno que: " + nombres.length);
}else{
    alert("Es usuario seleccionado es: " + nombres[elemento]);

}
*/

document.write("<h1> Lenguajes de programación del 2018 </h1>");

document.write("<ul>");
/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
    
}

lenguajes.forEach((a, indice, arr) => {
    console.log(arr);
    document.write("<li>"+ indice + a + "</li>");
});
*/
for (let lenguaje in lenguajes ){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

//Busquedas  fundIndex busca por indice
/*
var busqueda = lenguajes.find(function (lenguaje) {
    return lenguaje == "PHP";
});
*/

var precios =[ 10, 20, 30, 40, 50, 60];

//Cumplir una condicion en concreta


var busqueda = precios.some(precio => precio >= 70);

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda);
