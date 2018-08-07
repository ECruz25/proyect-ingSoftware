const passport = require('passport');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.login = passport.authenticate('local');

exports.logout = (req, res) => {
    req.logout();
};

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    console.log('You are not logged in');
};