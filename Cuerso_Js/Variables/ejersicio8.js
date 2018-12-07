'use strict'
/*
Calculadora
- pida dos numeros por pantalla
- si metemos un numero mal nos lo pida otra vez
- que nos muestre en el cuerpo de la pagina en una alerta y por la consola el resultado de
  sumar, restar, multiplicar, dividir las dos cifras
*/

var n1 = parseInt(prompt("Introduce el primer numero: ", 0));
var n2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while (isNaN(n1)) {
  n1 = parseInt(prompt("Introduce el primer numero: ", 0));
}

while (isNaN(n2)) {
  n2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

alert("ya esta el resultado consulta porfavor el console.log");

var rs = n1 + n2;
var rr = n1 - n2;
var rm = n1 * n2;
var rd = n1 / n2;


console.log("la sumas es: "+rs);
console.log("la resta es: "+rr);
console.log("la multiplicación es: "+rm);
console.log("la division es: " +rd);
