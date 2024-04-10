const { getCategoriasDB, addCategoriaDB, updateCategoriaDB,
        deleteCategoriaDB, getCategoriaPorCodigoDB } 
        = require('../usecases/categoriaUseCases');

const getCategorias = async (request, response) => {
    try {
        const data = await getCategoriasDB();
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar as categorias: ' + err.message
        });
    }
};

const addCategoria = async (request, response) => {
    try {
        const data = await addCategoriaDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Categoria Criada',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const updateCategoria = async (request, response) => {
    try {
        const data = await updateCategoriaDB(request.body);
        response.status(200).json({
            status: 'success',
            message: 'Categoria alterada',
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

const deleteCategoria = async (request, response) => {
    try {
        const message = await deleteCategoriaDB(request.params.codigo);
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

const getCategoriaPorCodigo = async (request, response) => {
    try {
        const data = await getCategoriaPorCodigoDB(request.params.codigo);
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};
module.exports = { getCategorias, addCategoria, updateCategoria, deleteCategoria, getCategoriaPorCodigo };