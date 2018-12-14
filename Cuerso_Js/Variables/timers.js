'use strict'

window.addEventListener ('load', ()=>{

    function intervalo() {
        //Timers
        var tiempo = setInterval(() => {
            console.log("Set interval ejecutar");
            var encabezado = document.querySelector ("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }
            
        }, 1000);
        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", ()=> {
        alert("paraste el bucle");
        clearInterval(tiempo);
    });

    var iniciar = document.querySelector("#iniciar");
    
    iniciar.addEventListener("click", ()=> {
        alert("Inicio el bucle.");
        intervalo();
    } )

});