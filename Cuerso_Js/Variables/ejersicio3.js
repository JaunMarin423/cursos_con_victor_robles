'use strict'

/*
Hacer un programa que muestre todos los numeros entre
dos numeros introducidos por el usuario
*/
 var n1 = parseInt(prompt("Introduce el primer numero", 0));
 var n2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De " + n1 +" a " + n2 );
for (var i = n1; i <= n2; i++) {
  document.write(i+"<br/>")
}
