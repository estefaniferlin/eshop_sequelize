const { autenticaUsuarioDB } = require('../usecases/segurancaUseCases');
require("dotenv-safe").config(); // terei acesso às variaveis de ambientes criadas (secret)
const jwt = require('jsonwebtoken');

const login = async (request, response) => {
    try {
        const usuario = await autenticaUsuarioDB(request.body);

        // É importante apenas incluir informações relevantes e não sensíveis no token
        const token = jwt.sign({
            email: usuario.email, 
            tipo: usuario.tipo
        }, process.env.SECRET, {
            expiresIn: 300 // token expira em 5 minutos
        });

        return response.json({ auth: true, token: token });
    } catch (err) {
        return response.status(401).json({ auth: false, message: err.message });
    }
};

function verificaJWT(request, response, next) {
    const token = request.headers['authorization'];
    if (!token) return response.status(401).json({ auth: false, message: 'Nenhum token recebido' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return response.status(401).json({ auth: false, message: 'Falha ao autenticar token. ' + err.message });

        // Adicionando o objeto usuário extraído no token para ser usado na próxima requisição
        request.usuario = decoded;
        next();
    });
}


module.exports = { login, verificaJWT };