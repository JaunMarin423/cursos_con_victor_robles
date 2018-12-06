'use strict'
/*
Mostrar todos los numeros impares que hay
entre dos numeros introducidos por el usuario
*/

var n1 = parseInt(prompt("Introduce el primer numero", 0));
var n2 = parseInt(prompt("Introduce el segundo numero", 0));

while (n1 < n2) {
  n1++;

  if (n1 % 2 != 0) {
    console.log(n1);
  }
}
