$(document).ready(function() {
  // Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200
    });
  }
  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: "prueba de contenidoc"
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: "pkjasd"
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: "pkjasd"
      },
      {
        title: "Prueba de titulo 4",
        date: new Date(),
        content: "pkjasd"
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el día " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: "prueba de contenido numero 5"
      }
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
  }

  // Selector de tema

  var theme = $("#theme");

  $("#to-green").click(function() {
    asignarColoryCambiar("green");
  });
  $("#to-red").click(function() {
    asignarColoryCambiar("red");
  });
  $("#to-blue").click(function() {
    asignarColoryCambiar("blue");
  });

  //guardar el localStorage

  var colorGuardado = localStorage.getItem("theme");
  if (colorGuardado != null) {
    switch (colorGuardado) {
      case "green":
        asignarColoryCambiar("green");
        break;
      case "red":
        asignarColoryCambiar("red");
        break;
      case "blue":
        asignarColoryCambiar("blue");
        break;
    }
  }
  //Cambia el color y asigna el valor en el localStorage
  function asignarColoryCambiar(color) {
    localStorage.setItem("theme", color);
    theme.attr("href", "css/" + color + ".css");
  }

  //Scroll Ariba de la web
  $(".subir").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });

  // login falso
  $("#login form").submit(function() {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function() {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }
  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function() {
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  // validacion de jquery Forn Validation
  if (window.location.href.indexOf("contacto") > -1) {

    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang: "es",
      errorMessagePosition: 'top',
      scrollTopOnError: true
    });
  }
});
