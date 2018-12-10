'use strict'


//parametros de REST y SPREAD

// REST es (...)

function listadoFrutas(f1, f2, ...resto_de_frutas){
  console.log("Fruta 1: " + f1);
  console.log("Fruta 2: " + f2);
  console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana","pera","sandia","tomate","coco")

var frutas =["Naranja", "Manzana"];
listadoFrutas(...frutas, "pera","sandia","tomate","coco")
