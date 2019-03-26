'use strict'

var Project = require('../models/project');

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo test del controlador de project'
        });
    },
//Guardar
    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.descriptino = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            console.log(err);
            if (err) return res.status(500).send({
                message: "Error al guardar."
            });

            if (!projectStored) return res.status(404).send({
                message: "No se ha podido guardar el proyecto."
            });

            return res.status(200).send({
                project: projectStored
            });



        });
    },
//obtener 
    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({
            message: "El proyecto noexiste."
        });

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({
                message: "Error al devolver los datos"
            });
            if (!project) return res.status(404).send({
                message: "El documento no existe"
            });

            return res.status(200).send({
                project
            });
        });
    },
        //Enlistar
    getProjects: function(req, res){

        Project.find({}).sort('year').exec((err, projects) => {

            if (err) return res.status(500).send({message: "Error al devolver los datos"});

            if (!projects) return res.status(404).send({message: "No hay proyectos para mostrar"});

            return res.status(200).send({projects});

        });

    },
    //Actualizar

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) =>{
            if(err) return res.status(500).send({message: "Error al actualizar."});

            if(!projectUpdated) return res.status(404).send({message:"No se ha podido actualizar"});

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },
};

module.exports = controller;