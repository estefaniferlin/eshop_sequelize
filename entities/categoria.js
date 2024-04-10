const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Ajuste o caminho conforme necessário
const Produto = require('../entities/produto');

class Categoria extends Model {}

Categoria.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Se o código é gerado automaticamente
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
    timestamps: false
});

module.exports = Categoria;