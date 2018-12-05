'use strict'

// pruebas con let y var


//prueba con var

var n =40;

 console.log(n) //valor 40

 if (true) {
   var n = 50;
   console.log(n);//valor 50
 }

 console.log(n);//valor50

 //prueba con let

 var texto ="Curso JS con var" //valor"
 console.log(texto);

 if (true) {
   let texto = "Curso Js con let"
   console.log(texto);//valor let
 }

console.log(texto);//valor var
