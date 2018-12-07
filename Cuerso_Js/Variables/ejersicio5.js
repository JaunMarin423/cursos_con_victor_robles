'use strict'

/*
hay que mostrar todos los numeros
divisores de un numero que inserta
el cliente por pantalla en prompt
*/

var n1 = parseInt(prompt("Introduce el que vamos a dividir", 0));

if (isNaN(n1)) {
  alert("Ingrese porfavor un número");
}

var resultado ="1";
for (var i = 2; i < n1; i++) {
  var check = n1 / i ;

  if (check == Math.round (check)) {
    resultado += "," + i;
  }
}
 resultado += " y " + n1;

 alert("Los numeros divisores son:" + resultado);
