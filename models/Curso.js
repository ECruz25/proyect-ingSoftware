const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const cursoSchema = mongoose.Schema({
  nombre: {
    type: String
  }
});

module.exports = mongoose.model('Curso', cursoSchema);
