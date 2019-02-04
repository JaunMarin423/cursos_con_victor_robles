$(document).ready(function () {

    // Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    // Posts
    var posts = [
            {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'prueba de contenidoc'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'pkjasd'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'pkjasd'
        },
        {
            title: 'Prueba de titulo 4',
            date: new Date(),
            content: 'pkjasd'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'prueba de contenido numero 5'
        },
    ];
    posts.forEach((item, index) => {
        var post = `
         <article class = "post">
            <h2>
                ${item.title}
            </h2> 
            <span class = "date" >
                ${item.date}
            </span>
            <p>
                ${item.content}
            </p>
            <a href = "#" class = "buttom-more"> Leer más </a> 
            </article >
            `;

        $("#posts").append(post);
    });
    
    // Selector de tema
    
        var theme = $("#theme");
        
        $("#to-green").click(function(){
            asignarColoryCambiar('green');
        });
        $("#to-red").click(function () {
            asignarColoryCambiar('red');
        });
        $("#to-blue").click(function () {
            asignarColoryCambiar('blue');
        });
 
        //guardar el localStorage

        var colorGuardado = localStorage.getItem("theme");
        if(colorGuardado != null){
            switch(colorGuardado) {
                case 'green':
                asignarColoryCambiar('green');
                break;
                case 'red':
                asignarColoryCambiar('red');
                break;
                case 'blue':
                asignarColoryCambiar('blue');
                break;
            }
    
        }
        //Cambia el color y asigna el valor en el localStorage
        function asignarColoryCambiar(color){
            localStorage.setItem("theme",color);
            theme.attr("href","css/"+color+".css")
        }


        //Scroll Ariba de la web
        $('.subir').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

});