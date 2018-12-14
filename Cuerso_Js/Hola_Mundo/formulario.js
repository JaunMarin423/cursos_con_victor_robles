'use Strict'
window.addEventListener('load', ()=>{

    var div1 = document.querySelector("#Formulario");
    var div2 = document.querySelector("#resultado");

    div1.addEventListener('submit', ()=>{
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;
        
        var resultado_resultado = [nombre, apellido, edad];
        var indice;

        for(indice in resultado_resultado){
            var par = document.createElement("p");
            par.append(resultado_resultado[indice]);
            div2.append(par);
        }
    });

});