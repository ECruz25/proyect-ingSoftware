const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const promisify = require('es6-promisify');

exports.crearUsuario = async(req, res, next) => {

    const usuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        identidad: req.body.identidad,
        ciudad: req.body.ciudad,
        fechaNacimiento: req.body.fechaNacimiento,
        edad: req.body.edad,
        nivelEducativo: req.body.nivelEducativo,
        genero: req.body.genero,
        rol: req.body.rol

    });

    const register = promisify(Usuario.register, Usuario);
    await registrar(usuario, req.body.password);
    next();
}