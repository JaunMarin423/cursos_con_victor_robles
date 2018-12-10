'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre


/*var pelicula = function(nombre){
  return "ña pelicula es: " + nombre;
}*/

//CAlback una funcion dentro de otra funcion

function sumame (n1 , n2, sumaYmuestra,sumaPordos){
  var sumar = n1 + n2;

    sumaYmuestra(sumar);
    sumaPordos(sumar);

  return sumar;
}

sumame(5, 7, dato => {
  console.log("La suma es:", dato);
},
dato=> {
  console.log("la suma por dos: ", (dato*2));
}
);
