'use strict'

//plantillas de texto

var nombre = prompt("Tú nombre aquí");
var apellidos = prompt("Tú apellido aquí");

//var texto = "Mi nombre es:" + nombre +" "+ "Mis apellidos son: " + apellidos;

var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mi apellidos son: ${apellidos}</h3>
`;


document.write(texto);