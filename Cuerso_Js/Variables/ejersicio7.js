'use strict'

/*
Tabla de multiplicar impresa en pantalla
*/
//document.write();
var n1 = parseInt(prompt("Ingrese la tabla a multiplicar", 0));
var n2 = parseInt(prompt("Ingrese el limite de la tabla", 0));

document.write("<h1>Tabla del "+ n1 + "</h1>");
if (isNaN(n1)) {
  alert("Ingrese porfavor un número: ");
}

for (var i = 1; i < n2; i++) {

    var resultado = i * n1;
    document.write(i +" X "+ n1 +" = "+resultado + "<br/>");
}
