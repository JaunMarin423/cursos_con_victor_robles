'use strict'

// Localstorage
/* validar localStorage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
    
}else{
    console.log("No LocalStorage disponible")
}
*/
//Guardar datos
localStorage.setItem("titulo", "Cursos")

//recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


// Guardar objeto
var usuario = {
    nombre: "Juan David",
    email: "wvany1996@gmail.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append("JUANDAVIDMARIN");

//Borrar datos del localstrage


localStorage.clear();
