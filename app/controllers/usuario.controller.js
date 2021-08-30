const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuario.model');

const generarToken = async (data) => {
    try {
        let tokenSign = jwt.sign({data}, process.env.SECRET_KEY)
        return tokenSign
    }catch (err){
        console.log(err)
        throw new Error(err)
    }
}

const registrarUsuario = async (data) => {
    const { email, pass, nombres, apellidos } = data;
    let nuevoUsuario = new UsuarioModel(email, pass, nombres, apellidos);    
    try {
        let res = await nuevoUsuario.registrarUsuario();
        return res;
    } catch (error) {
        throw error;
    }    
}

const iniciarSesion = async (data) => {
    const { email, pass } = data;
    let usuario = new UsuarioModel(email, pass, '', '');
    let datosCorrectos = await usuario.comprobarCredenciales();
    try {
        if(datosCorrectos !== false) {
            let token = await generarToken(datosCorrectos);            
            return token;
        }
        else {
            throw new Error('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        throw error;
    }
}

const modificarUsuario = async (id, data) => {
    const { pass, nombres, apellidos } = data;  
    let modUsuario = new UsuarioModel('', pass, nombres, apellidos); 
    try {        
        let res = await modUsuario.modificarUsuario(id);
        return res;
    } catch (error) {
        throw error;
    }
}

const eliminarUsuario = async (id) => {  
    try {        
        let res = await UsuarioModel.eliminarUsuario(id);
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    generarToken,
    registrarUsuario,
    iniciarSesion,
    modificarUsuario,
    eliminarUsuario
}