const Usuario = require('../db/usuario');

module.exports = class UsuarioModel {
    constructor(email, pass, nombres, apellidos) {        
        this.email = email;
        this.pass = pass;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
    //C
    registrarUsuario = async () => {
        let existeUsuario = await this.checarExistenciaUsuario();
        if(existeUsuario)
            throw new Error('Usuario ya ha sido registrado');
        else {
            try {
                //let nuevoUsuario = 
                await Usuario.create({                      
                    email: this.email, 
                    pass: this.pass, 
                    nombres: this.nombres, 
                    apellidos: this.apellidos
                });
                //console.log(nuevoUsuario.id);      
                return 'Usuario creado'
            } catch (err){
                throw new Error('No se pudo registrar usuario')
            }
        }
    }
    //R
    checarExistenciaUsuario = async () => {
        let existeUsuario = await Usuario.findOne({
            where: {email: this.email} 
        });
        if (existeUsuario === null)
            return false
        else 
            return true        
    }
    comprobarCredenciales = async () => {
        let usuario = await Usuario.findOne({
            where: {
                email: this.email, 
                pass: this.pass                
            } 
        });
        if (usuario === null)
            return false
        else 
            return usuario    
    }
    //U
    modificarUsuario = async (id) => {        
        try {
            let usuarioAModificar = await Usuario.findOne({
                where: {id: id}
            });
            if(usuarioAModificar !== null){
                usuarioAModificar.pass = this.pass;
                usuarioAModificar.nombres = this.nombres;
                usuarioAModificar.apellidos = this.apellidos;
                await usuarioAModificar.save();
                return 'Usuario modificado';
            }
            else
                throw new Error('No existe usuario');
        } catch (error) {
            throw error
        }        
    }
    //D
    static eliminarUsuario = async (id) => {
        let usuarioAEliminar = await Usuario.findOne({
            where: {id: id}
        });
        try {
            if(usuarioAEliminar === null)
                throw new Error('Usuario no existe o ya ha sido eliminado')
            else {
                await usuarioAEliminar.destroy();
                return 'Usuario eliminado'
            }                
        } catch (error) {
            throw error
        }
    }
    
}