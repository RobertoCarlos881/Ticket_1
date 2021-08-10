const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const CostoAdministrativo = sequelize.define('costos_administrativos', {
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
    concepto: {
        type: DataTypes.STRING(40),
        allowNull: true,        
    },
    opcion: {
        type: DataTypes.INTEGER,
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

Presupuesto.hasMany(CostoAdministrativo, relacion);
CostoAdministrativo.belongsTo(Presupuesto, relacion);

module.exports = CostoAdministrativo;