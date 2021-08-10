const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const FlujoDeEfectivo = sequelize.define('flujos_de_efectivo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_presupuesto: {
        type: Sequelize.INTEGER,
        references: {
            model: Presupuesto,
            key: 'id'
        },
        allowNull: false        
    },*/
    ingreso: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false,        
    },    

}, { 
    freezeTableName: true,
    timestamps: false
});

let relacion = {
    foreignKey: {
        name: 'id_presupuesto',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
};

Presupuesto.hasMany(FlujoDeEfectivo, relacion);
FlujoDeEfectivo.belongsTo(Presupuesto, relacion);

module.exports = FlujoDeEfectivo;