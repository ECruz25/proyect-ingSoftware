const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.Promise = global.Promise;

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  email: {
    required: 'Provea un correo de unitec',
    unique: true,
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

usuarioSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Usuario', usuarioSchema);
