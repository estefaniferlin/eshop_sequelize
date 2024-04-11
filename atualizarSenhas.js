const bcrypt = require('bcrypt');
const Usuario  = require('./entities/usuario');

async function atualizarSenhas(password) {
    try {
        const usuarios = await Usuario.findAll();

        for (let usuario of usuarios) {
          const senhaHash = await bcrypt.hash(usuario.senha, 10);
          await usuario.update({ senha: senhaHash });
        }
    
        console.log('Todas as senhas foram atualizadas.');
    } catch (error) {
        console.error('Erro ao atualizar senhas:', error);
    }
}

atualizarSenhas();