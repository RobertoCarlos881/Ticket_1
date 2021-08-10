const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Recurso = require("./recurso");

const RecursoPorcentaje = sequelize.define('recursos_porcentajes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_recurso: {
        type: Sequelize.INTEGER,
        references: {
            model: 'recursos',
            key: 'id'
        },
        allowNull: false        
    },*/
    porcentaje: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
}, { 
    timestamps: false
});

let relacion = {
    foreignKey: {
        name: 'id_recurso',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
};

Recurso.hasMany(RecursoPorcentaje, relacion);
RecursoPorcentaje.belongsTo(Recurso, relacion);

module.exports = RecursoPorcentaje;