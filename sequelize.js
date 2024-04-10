const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
    isProduction ? process.env.DATABASE_URL : 'eshoplpe', // Nome do banco de dados ou DATABASE_URL
    isProduction ? null : 'postgres', // Usuário (não necessário em produção se usar DATABASE_URL)
    isProduction ? null : 'accesskey@Me7', // Senha (não necessário em produção se usar DATABASE_URL)
    {
        dialect: 'postgres',
        host: isProduction ? null : 'localhost', // Host (não necessário em produção se usar DATABASE_URL)
        protocol: 'postgres', // Protocolo de conexão
        port: isProduction ? null : 5432, // Porta (não necessário em produção se usar DATABASE_URL)
        dialectOptions: isProduction ? {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        } : {}
    }
);

module.exports = sequelize;