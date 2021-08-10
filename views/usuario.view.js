const express = require('express');
const router = express.Router();
const middjwt = require('../midd/midd.jwt');
const middValidation = require('../midd/midd.validation');
const usuarioController = require('../controllers/usuario.controller');

router.post('/usuario/signup', middValidation.validarSignUp, async (req, res) => {
    let body = req.body;    
    try {
        let resultado = await usuarioController.registrarUsuario(body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
});

router.post('/usuario/login', middValidation.validarLogin, async (req, res) => {
    let body = req.body;    
    let recordar = req.body.recordar;
    try {
        let resultado = await usuarioController.iniciarSesion(body); 
        if (recordar)    
            res.status(200).cookie('token', resultado, {maxAge: 31536000000}).json(resultado);  //Cookie expira en un año                              
        else
            res.status(200).cookie('token', resultado).json(resultado); //Expira en la sesion
    } catch (error) {
        res.status(400).send({error: error.message});    
    }
});

router.put('/usuario/actualizar/:id', middValidation.validarActualizacionUsuario, middjwt.checarToken, async (req,res) => {
    let id = req.params.id;
    let body = req.body;
    const token = req.headers.authorization.split(' ')[1];            
    const decoded = middjwt.decodificarToken(token);
    try {
        if(decoded.data.id == id) { //Validar que el token corresponda con el id solicitado en endpoint
            let resultado = await usuarioController.modificarUsuario(id, body);
            res.status(200).json(resultado);
        }
        else
            throw new Error('No tienes acceso a este usuario')
    } catch (error) {
        res.status(400).send({error: error.message});
    }
});

router.delete('/usuario/eliminar/:id', middjwt.checarToken, async (req,res) => {
    let id = req.params.id;    
    const token = req.headers.authorization.split(' ')[1];            
    const decoded = middjwt.decodificarToken(token);
    try {
        if(decoded.data.id == id) { //Validar que el token corresponda con el id solicitado en endpoint
            let resultado = await userController.eliminarUsuario(id);
            res.status(200).json(resultado);
        }
        else
            throw new Error('No tienes acceso a este usuario');
    } catch (error) {
        res.status(400).send({error: error.message});
    }
});

router.get('/usuario/logout', middjwt.checarToken, async (req,res) => {
    res.clearCookie('token');    
});


module.exports = router;