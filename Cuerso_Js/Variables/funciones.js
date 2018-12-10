'use strict'

// funciones
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones

/*var n1 = parseInt(prompt("Introduce el primer numero: ", 0));
var n2 = parseInt(prompt("Introduce el segundo numero: ", 0));

var r1=n1 +n2;
var r2=n1 -n2 ;
var r3=n1 *n2;
var r4=n1 /n2;*/

function porConsola(n1, n2){
  //return "Hola soy la calculadora";
    console.log("Suma: " + (n1 + n2) );
    console.log("Resta: "+ (n1 - n2) );
    console.log("Multiplicación: "+ (n1 * n2)  );
    console.log("Divison: "+ (n1 / n2) );
    console.log("*****************************");
}

function porPantala(n1, n2){
  document.write("Suma: " + (n1 + n2)+"<br/>" );
  document.write("Resta: "+ (n1 - n2)+"<br/>"  );
  document.write("Multiplicación: "+ (n1 * n2)+"<br/>"   );
  document.write("Divison: "+ (n1 / n2)+"<br/>"  );
  document.write("*****************************")+"<br/>" ;
}

//Defino la fincion
function calculadora( n1, n2, mostrar = false){
//conjunto de instrucciones a ejecutar
if (mostrar == false) {
    porConsola(n1, n2);
  }else {
    porPantala(n1, n2);
  }
  return true;
}

// Invocar o llamar a la funciones

calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
