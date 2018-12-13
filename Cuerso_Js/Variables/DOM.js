'use strict'

// DOM - Document object model

function cambiaColor(color) {
    caja.style.background = color;
}

// Consegir elementos con un Id Concreto

//var caja = document.getElementById ("caja");

var caja = document.querySelector("#caja");

caja.innerHTML = "Texto de la caja desde JS";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola holas";

// Consegir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

//todosLosDivs.forEach((valor, indice) => {

var seccion = document.querySelector('#misection');
var hr = document.createElement("hr");




    var valor;
    for (valor in todosLosDivs) {
        if (typeof todosLosDivs[valor].textContent == 'string') {
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todosLosDivs[valor].textContent);

            parrafo.prepend(texto);
            seccion.append(parrafo);
            //document.querySelector("#misection").append(parrafo);
        }
    }
    seccion.append(hr);

//});

// Conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = "yellow";

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
