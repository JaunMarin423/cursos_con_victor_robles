'use strict'

$(document).ready(function(){
    

    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeTo('slow',1);
    });

    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeTo('slow',0);
    });

    $("#todo").click(function(){
        $("#caja").toggle('fast');
    });
});