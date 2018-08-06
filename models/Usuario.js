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
    fechaNacimiento: {
        type: Date
    },
    edad: {
        type: number
    },
    nivelEducativo: {
        type: String
    },
    genero: {
        type: String
    },
    rol: {
        type: String
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);