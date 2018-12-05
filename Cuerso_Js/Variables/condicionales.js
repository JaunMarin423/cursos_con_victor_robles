'use strict'

//uso de la condicional if
/*operadores relacionales
mayor: >
menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
Distinto: !=
*/

var edad1 = 10;
var edad2 = 12;

if (edad1 > edad2) {

  console.log("edad1 es mayor que edad2");

}else {
  console.log("edad1 es menor que edad2");
}

/*
Operadores logicos
AND (y): &&
or (o): ||
Negacion: !
*/

var year = 2018;

//Negacion
if (year != 2016) {
  console.log("El a;o no es 2016 realmete es: " + year);
}

//AND
if (year >= 2000 && year <= 2020) {
  console.log("Estamos en la era actual");
}else {
  console.log("estamos en la era posmoderna");
}

//or
if (year == 2008 || year == 2018) {
  console.log("Estamos en el a;o " + year);
}
