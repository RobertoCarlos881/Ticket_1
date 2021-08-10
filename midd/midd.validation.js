const Joi = require('joi');
const UsuarioValidation = require('./usuario.validation');
const PresupuestoValidation = require('./presupuesto.validation');

const validarLogin = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, UsuarioValidation.login, 'Datos incorrectos')
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const validarSignUp = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, UsuarioValidation.signup, 'Datos incorrectos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const validarActualizacionUsuario = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, UsuarioValidation.actualizarUsuario, 'Datos incorrectos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const validarPresupuesto = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, PresupuestoValidation.registrarPresupuesto, 'Datos incorrectos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    validarLogin,
    validarSignUp,
    validarActualizacionUsuario,
    validarPresupuesto
}