const express = require('express');
const middjwt = require('../app/middleware/midd.jwt');
const router = express.Router();

router.get('/', middjwt.headerUsuario, middjwt.loggeado, (req, res) => {    
    res.render('login');
});

router.get('/signup', middjwt.headerUsuario, middjwt.loggeado, (req, res) => {    
    res.render('signup');
});

router.get('/index', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {    
    res.render('index');
});

router.get('/create', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {
    res.render('create');
});

router.get('/edit', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {
    res.render('edit');
});

module.exports = router;