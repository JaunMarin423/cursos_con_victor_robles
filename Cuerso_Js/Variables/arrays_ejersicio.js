'use strict'

/*
1. pida 6 numeros por pantalla y los meta en un array *
2. Mostrar el array entero (todos sus elementos) en el cuertpo de la pagina y en la consola*
3. Ordenarlo y mostrarlo*
4. Invertir su orden y mostrarlo*
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo entra y su indice
(Se valorá el uso de funciones)
*/ 

function mostrarArray (elementos, textoCustom = " "){
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
        
        document.write("<li>" +elemento+ "</li>");
        
    });
    document.write("</ul>");
}

//var n = new Array (6);
var numeros = [];



//Solicitar numeros y guardarlos en un array
/*do {
    var numeros = prompt('Intruduce 6 numeros, al terminar escribir EXIT');
        n.push(numeros);
} while (numeros != "EXIT");

n.pop();
*/

for (let i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduce un numero", 0)))
    
}

// Mostrar en el cuerpo del la página
mostrarArray(numeros);

//Mostrar en la consola
console.log(numeros);

//Muestra y ordenar 

numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, ' ordenado')
//revertido 
numeros.sort(function (a, b) {
    return b - a
});
mostrarArray(numeros, ' revertido')

// contar elementos 

document.write("<h1>El array tiene </h1>" + numeros.length+ "elementos");

// Busqueda

var busqueda = parseInt(prompt("Busqueda un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1> Encontrado </h1>");
    document.write("<h1> Posición de la busqueda: " + posicion + "</h1>");
}else{
     document.write("<h1> lo sentimos </h1>");
}




    //n1
/*
    document.write("<h1>Contenido del array</h1>");
document.write("<ul>");
for (const number in n1) {
    document.write("<li>"+ n1 [number] + "</li>");
}
console.log(n1);

document.write("</ul>");
    //n2
document.write("<ul>");
for (const number in n2) {
    document.write("<li>" + n2[number] + "</li>");
}
console.log(n2);

document.write("</ul>");
*/