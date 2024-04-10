const { getProdutosDB, addProdutoDB, updateProdutoDB,
        deleteProdutoDB, getProdutoPorCodigoDB } 
        = require('../usecases/produtoUseCases');

const getProdutos = async (request, response) => {
    try {
        const data = await getProdutosDB();
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os produtos: ' + err.message
        });
    }
};

const addProduto = async (request, response) => {
    try {
        const data = await addProdutoDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Produto Criado',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const updateProduto = async (request, response) => {
    try {
        const data = await updateProdutoDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Produto alterado',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const deleteProduto = async (request, response) => {
    try {
        const message = await deleteProdutoDB(request.params.codigo);
        response.status(200).json({
            status: 'success',
            message
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const getProdutoPorCodigo = async (request, response) => {
    try {
        const data = await getProdutoPorCodigoDB(request.params.codigo);
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

module.exports = { getProdutos, addProduto, updateProduto, deleteProduto, getProdutoPorCodigo };