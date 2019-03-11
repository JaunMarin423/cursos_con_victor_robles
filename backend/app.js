'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors

// rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
});


app.post('/test/:id', (req, res) => {
    console.log(req.body.Nombre);
    console.log(req.params.id);
    
    res.status(200).send({
        message: "Hola mundo desde el api de nodeJS"
    });
});

// exportat
module.exports = app;