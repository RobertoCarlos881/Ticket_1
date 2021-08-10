const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const Usuario = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,        
        validate: {
            isEmail: true
        },
        unique: {
            args: true,
            msg: 'Correo electrónico ya registrado'
        }
    },
    pass: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
});

module.exports = Usuario;