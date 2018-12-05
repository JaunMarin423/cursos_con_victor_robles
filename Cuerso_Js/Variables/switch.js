'use strict'

//Switch
var edad = 75;
var imprime = "";

switch (edad) {
  case 18:
      imprime = "Acabas de cumplir la mayoria de edad";
    break;
  case 25:
      imprime = "ya eres un adulto";
    break;
  case 40:
      imprime = "Crisis de los cuarenta";
    break;
  case 75:
      imprime = "Eres ya un anciano";
      break;

  default:
    imprime = "tu edad es neutra";
      break;
}

console.log(imprime);
