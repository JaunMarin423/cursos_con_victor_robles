'use strict'
$(document).ready(function(){

    reloadLinks();

    $('#add_button')
    .removeAttr('disabled')
    .click(function () {
       $('#menu').append('<li><a href="' + $("#add_link").val()+'"></a></li>');
       $("#add_link").val(''); 
    reloadLinks();
    });

});

// Metodos

/*
 
.html
.append
.before añade fuera de la lista
.after
.preppend

 */
function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");

        that.attr('target','_bank');
        

        that.text(enlace);
    });
}

console.log($('#menu'));
