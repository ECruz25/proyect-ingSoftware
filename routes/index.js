var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', authController.login, (req, res) => {
    res.redirect('/');
});

router.post('/logout', authController.logout, (req, res) => {
    res.redirect('/');
});

router.post('/registrar', usuarioController.crearUsuario, authController.login, (req, res) => {
    res.redirect('/');
});

module.exports = router;