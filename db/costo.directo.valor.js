const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const CostoDirecto = require("./costo.directo");

const CostoDirectoValor = sequelize.define('costos_directos_valores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_costo_directo: {
        type: Sequelize.INTEGER,
        references: {
            model: 'costos_directos',
            key: 'id'
        },
        allowNull: false        
    },
    */
    valor: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false,        
    },
}, { 
    timestamps: false
});

let relacion = {
    foreignKey: {
        name: 'id_costo_directo',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
};

CostoDirecto.hasMany(CostoDirectoValor, relacion);
CostoDirectoValor.belongsTo(CostoDirecto, relacion);

module.exports = CostoDirectoValor;