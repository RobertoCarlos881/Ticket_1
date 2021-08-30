const Joi = require('joi');

module.exports = {
    login: Joi.object().keys({
        email: Joi.string().email().required().max(100),
        pass: Joi.string().required().max(20),
        recordar: Joi.boolean().required()
    }),

    signup: Joi.object().keys({
        email: Joi.string().email().required().max(100),
        pass: Joi.string().required().max(20),
        nombres: Joi.string().regex(/^[a-zA-Z]+$/).required().max(40),
        apellidos: Joi.string().regex(/^[a-zA-Z]+$/).required().max(40),              
    }),

    actualizarUsuario: Joi.object().keys({
        pass: Joi.string().required().max(20),
        nombres: Joi.string().regex(/^[a-zA-Z]+$/).required().max(40),
        apellidos: Joi.string().regex(/^[a-zA-Z]+$/).required().max(40),              
    }),

}