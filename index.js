const express = require('express');
const cors = require('cors');
const rotas = require('./routes/rotas');
const sequelize = require('./sequelize');

require('./associations');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors()); // para permitir conexoes fora da rede que eu estou

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

app.use(rotas);

app.listen(process.env.PORT || 3002, () => { // levantar o servidor / tenho que deixar a api preparada para pegar a porta das variaveis de amiente do servidor que vier (entao nao especificamos a porta)
    console.log('Servidor da API rodando...')
})

//para rodar dar npm run start:dev