$(document).ready(function(){
    
    // Selector de ID
    $("#rojo").css("background","red")
            .css("color", "white");
    $("#amarillo").css("background","yellow")
                .css("color", "green");
    $("#verde").css("background","green")
                .css("color", "white");

    // Selector de clases
    var mi_clase = $('.zebra').css("padding", "5px");

   //mi_clase.css("border", "5px dashed black")
    
    $('.sin_borde').click(function(){
        console.log("Click dado");
        $(this).addClass('zebra');
    });
    


    //Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande')
        }else{
            that.removeClass('grande')
        }
        
    });

});
// $ se da referencia a jQery despues de eseo selector posterior evento