const jwt = require('jsonwebtoken');
const PresupuestoModel = require('../models/presupuesto.model');

const registrarPresupuesto = async (body, idUsuario) => {
    const { proyecto, mes, año, datos } = body;
    let nuevoPresupuesto = new PresupuestoModel(proyecto, false, mes, año, datos);      
    try {
        let res = await nuevoPresupuesto.registrarPresupuesto(idUsuario);
        return res;
    } catch (error) {
        throw error;
    }    
}

const listarPresupuestos = async () => {
    try {
        let presupuestos = await PresupuestoModel.listarPresupuestos();
        return presupuestos;
    } catch (error) {
        throw error;
    }
}

const listarDetallePresupuesto = async (id) => {
    try {
        let presupuesto = await PresupuestoModel.listarDetallePresupuesto(id);
        return presupuesto;
    } catch (error) {
        throw error;
    }
}

const actualizarPresupuesto = async (body, idPresupuesto) => {
    const { proyecto, nuevaVersion, mes, año, datos } = body;
    let nuevoPresupuesto = new PresupuestoModel(proyecto, nuevaVersion, mes, año, datos);      
    try {
        let res = await nuevoPresupuesto.actualizarPresupuesto(idPresupuesto);
        return res;
    } catch (error) {
        throw error;
    }    
}

const eliminarPresupuesto = async (id) => {
    try {
        let res = await PresupuestoModel.eliminarPresupuesto(id);
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registrarPresupuesto,
    listarPresupuestos,
    listarDetallePresupuesto,
    actualizarPresupuesto,
    eliminarPresupuesto
}