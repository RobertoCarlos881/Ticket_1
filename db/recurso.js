const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const Recurso = sequelize.define('recursos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    concepto: {
        type: DataTypes.STRING(40),
        allowNull: true,        
    },
    costo_mensual: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false
    }
}, { 
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

Presupuesto.hasMany(Recurso, relacion);
Recurso.belongsTo(Presupuesto, relacion);

module.exports = Recurso;