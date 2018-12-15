'use strict'

/*

1. Formulario con los campos: Nombres, Apellidos y edad
2. Boton de enviar el Formulario: evento submit
3. Mostrar datos por pantalla.
4. Tener un botón que al darle click nos muestre los 
    datos acruales del formulario.
5. Validación del formulario

*/

window.addEventListener('load', ()=>{
    
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed")
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () => {
        console.log("Evento submit funciona");

            var nombre = document.querySelector("#nombre").value;
            var apellido = document.querySelector("#apellido").value;
            var edad = parseInt(document.querySelector("#edad").value);

            if(nombre.trim() == null || nombre.trim().length == 0) {
                alert("nombre no es valido");
                return false;
            }


            if(apellido.trim() == null || apellido.trim().length == 0) {
                alert("apellido no es valido");
                return false;
            }

            if(edad == null || edad.length <= 0 || isNaN(edad) ) {
            alert("edad no es valido");
            return false;
            }


            box_dashed.style.display = "block";

            var datos_usuaruio = [nombre, apellido, edad];

            var p_nombre = document.querySelector("#p_nombre span");
            var p_apellido = document.querySelector("#p_apellido span");
            var p_edad = document.querySelector("#p_edad span");

            p_nombre.innerHTML = nombre;
            p_apellido.innerHTML = apellido;
            p_edad.innerHTML = edad;

            /*
            var indice;
            for(indice in datos_usuaruio){
                var parrafo = document.createElement("p");
                parrafo.append(datos_usuaruio[indice]);
                box_dashed.append(parrafo);
            }
            */     
    });

});

