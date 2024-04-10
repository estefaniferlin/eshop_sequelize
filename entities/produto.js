const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Ajuste o caminho conforme necessário
const Categoria = require('../entities/categoria');

class Produto extends Model {}

Produto.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidade_estoque: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN,
    valor: DataTypes.DECIMAL,
    data_cadastro: DataTypes.DATE,
    categoria: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produtos',
    timestamps: false
});


module.exports = Produto;