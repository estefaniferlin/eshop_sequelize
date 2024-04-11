const bcrypt = require('bcrypt');
const Usuario = require('../entities/usuario');

const autenticaUsuarioDB = async (body) => {
    
    try {
        
        const { email, senha } = body;
    
        // Busca o usuário pelo e-mail
        const usuario = await Usuario.findOne({
            where: { email }
        });


        // Se nenhum usuário foi encontrado ou a senha não bate
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            console.log('Senha fornecida:', senha);
            console.log('Senha hash armazenada:', usuario.senha);
            throw "Usuário ou senha inválidos";
            
        }

        // Retorna os detalhes do usuário, exceto a senha
        // Nota: ajuste conforme necessário para incluir/excluir campos específicos
        
        return {
            

            email: usuario.email,
            tipo: usuario.tipo,
            telefone: usuario.telefone,
            nome: usuario.nome
        };

    } catch (err) {
        throw "Erro ao autenticar o usuário: " + err;
    }
}

module.exports = { autenticaUsuarioDB };