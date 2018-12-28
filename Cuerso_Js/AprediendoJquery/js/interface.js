$(document).ready(function(){

    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar
    $(".elemento").resizable();

    // Seleccionar elementos
   // $(".lista-seleccionable").selectable();

    // Ordenar elementos
    // $(".lista-seleccionable").sortable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ah cambiado  la lista");
            
        }
    });
 
    
    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
            
        }
    });

    // Efectos

    $("#mostrar").click(function(){
        $(".caja-efectos").effect("explode");
    });
});