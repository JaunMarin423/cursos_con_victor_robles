'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

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
    getProjects: function (req, res) {

        Project.find({}).sort('year').exec((err, projects) => {

            if (err) return res.status(500).send({
                message: "Error al devolver los datos"
            });

            if (!projects) return res.status(404).send({
                message: "No hay proyectos para mostrar"
            });

            return res.status(200).send({
                projects
            });

        });

    },
    //Actualizar

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {
            new: true
        }, (err, projectUpdated) => {
            if (err) return res.status(500).send({
                message: "Error al actualizar."
            });

            if (!projectUpdated) return res.status(404).send({
                message: "No se ha podido actualizar"
            });

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },

    //Borrar

    delateProject: function (req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if (err) return res.status(500).send({
                message: "Error al eliminar."
            });

            if (!projectRemoved) return res.status(404).send({
                message: "No se puede eliminar el proyecto."
            });

            return res.status(200).send({
                project: projectRemoved
            });
        });
    },

    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';


        if (req.files) {

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

            Project.findByIdAndUpdate(projectId, {
                image: fileName
            }, {new: true}, (err, projectUpdated) => {

                if(err) return res.status(200).send({
                    message: "Error al enviar imagem. "
                });

                if(!projectUpdated) return res.status(404).send({
                   message: "Proyecto no existe" 
                });

                return res.status(200).send({
                    project: projectUpdated
                });


            });
        }else{
            fs.unlink(filePath, (err) =>{
                return res.status(200).send({message: "La extencin no es valida"});
            });
        }
        } else {
            return res.status(200).send({
                message: fileName
            });
        }

    },

    getImageFile: function(req, res){
        var file = req.params.image;
        var path_file = './uploads/'+file;

        fs.exists(path_file, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                   message: "No existe la imagen..." 
                });
            }
        });
    }

};

module.exports = controller;