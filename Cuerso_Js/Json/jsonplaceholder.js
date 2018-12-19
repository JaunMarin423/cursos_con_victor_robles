'use strict'

//Fetch (ajax) y peticiones a servicios / api rest


var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
//capturar por medio de then que es la promesa acapturar los datos
    .then(data => data.json())
    //recoger datos
    .then(users => {
        //recoger datos
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((users, i) => {
                let nombre = document.createElement('h3');

                nombre.innerHTML = i + '. ' + user.first_name +" " + user.last_name;

                div_usuarios.appendChild(nombre);
                document.querySelector("#loading").style.display = 'none';
        });
        
    });