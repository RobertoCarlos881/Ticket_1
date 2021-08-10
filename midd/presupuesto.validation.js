const Joi = require('joi');

module.exports = {
    registrarPresupuesto: Joi.object().keys({
        proyecto: Joi.string().required().max(40),
        nuevaVersion: Joi.boolean().required(),
        mes: Joi.number().min(1).max(12).allow(null).required(),
        año: Joi.number().min(1900).max(3000).allow(null).required(),
        datos: Joi.object().required().keys({
            flujoDeEfectivo: Joi.array().required().items(Joi.number().precision(2).min(0).required()),
            ingresos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().max(40).allow(""),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            costosDirectos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().max(40).allow(""),
                    opcion: Joi.number().min(1).max(3),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            costosAdministrativos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().max(40).allow(""),
                    opcion: Joi.number().min(1).max(3),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            recursos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().max(40).allow(""),
                    costoMensual: Joi.number().precision(2).min(0),
                    porcentajes: Joi.array().items(Joi.number().min(1).max(100))
                })
            ),
        })
    }),
}
/*
ENDPOINTS
presupuesto
detallePresupuesto
crearPresupuesto
editarPresupuesto
EliminarPresupuesto
*/