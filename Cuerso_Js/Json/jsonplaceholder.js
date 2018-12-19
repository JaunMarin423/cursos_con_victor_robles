'use strict'

//Fetch (ajax) y peticiones a servicios / api rest


var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");




//capturar por medio de then que es la promesa acapturar los datos
    getUsuarios()
    .then(data => data.json())
    //recoger datos
    .then(users => {
        //recoger datos
        listadoUsuaros(users.data);

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
            mostrarJanet(user.data);      
    })
    .catch(error =>{ //Error ponerlos
        console.log(Error);
        alert("Error en las peticiones");
        
    })
    

    function getUsuarios() {
        return fetch('https://reqres.in/api/users?page=2');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){
        var profesor = {
            nombre: 'Juan',
            apellido: 'Marin',
            url: 'https://github.com/JaunMarin423',
        };
        return new Promise((resolve, reject) => {
            var profesor_string = "";

           setTimeout(function () {
                profesor_string = JSON.stringify(profesor);

                if (typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

                return resolve(profesor_string);

             }, 3000);

        });
    }

    function listadoUsuaros (usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';
        });
    }
//Obgetos limpios no necesito usar metodo MAP!
    function mostrarJanet(user){      
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;

        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

            document.querySelector("#janet .loading").style.display = 'none';
    }
