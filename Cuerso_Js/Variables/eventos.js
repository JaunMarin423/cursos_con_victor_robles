'use strict'

// Eventos del ratón

window.addEventListener('load', () => { //load
    function cambiarColor() {
        console.log("Me has dado click");

        var bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    // Click
    var boton = document.querySelector("#boton");

    boton.addEventListener('click', function () {
        cambiarColor();
        this.tyle.border = "10px solid black";
    });

    // Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
    })

    // Mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#CCC";
    })

    // Focus

    var input = document.querySelector("#camponombre");
    input.addEventListener('focus', function () {
        console.log("[fous] estas dentro del imput");

    })


    // Blur

    var input = document.querySelector("#camponombre");
    input.addEventListener('blur', function () {
        console.log("[blur] estas fuera del imput");

    })

    // KeyDown

    var input = document.querySelector("#camponombre");
    input.addEventListener('keydown', function () {
        console.log("[keydown]estas pulsando una tecla", String.fromCharCode(event.keyCode));

    })

    // Keypress

    var input = document.querySelector("#camponombre");
    input.addEventListener('keypress', function () {
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));

    })

    // Keyup

    var input = document.querySelector("#camponombre");
    input.addEventListener('keyup', function () {
        console.log("[keyup] Tecla arriba", String.fromCharCode(event.keyCode));

    })

}); //end load

