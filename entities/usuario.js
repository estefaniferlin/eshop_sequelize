const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Ajuste o caminho conforme necessário

class Usuario extends Model {}

Usuario.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    senha: DataTypes.STRING, // Garanta a segurança armazenando um hash da senha, não a senha em texto claro
    tipo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    nome: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;