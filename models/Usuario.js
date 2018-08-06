import { Schema } from 'mongoose';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    identidad: {
        type: String
    },
    ciudad: {
        type: String
    },
    fecha_nacimiento: {
        type: Date
    },
    edad: {
        type: number
    },
    nivel_educativo: {
        type: String
    },
    genero: {
        type: String
    },
    password: {
        type: String
    },
    rol: {
        type: String
    }
});

module.exports = mongoose.model('Usuario', cursoSchema);