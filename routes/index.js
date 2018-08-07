var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', authController.login, (req, res) => {
  res.redirect('/');
});

module.exports = router;
