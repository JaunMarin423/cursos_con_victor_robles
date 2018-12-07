'use strict'

/*
if y while
 Hacer un programa si el numero es par o inpar
 Ventana prompt
 Si no es numero que nos pida el numeros
 numero inpar o par
*/

var n1 = parseInt(prompt("Introduce el que vamos a dividir", 0));

while (isNaN(n1)) {
  n1 = parseInt(prompt("Introduce el que vamos a dividir", 0));
}

if (n1 % 2 == 0) {
    alert("Espar ");
}else {
  alert("no es par");
}
