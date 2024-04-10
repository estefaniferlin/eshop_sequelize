const { Router } = require('express');
const { verificaJWT } = require('../controllers/segurancaController');
const { getCategorias, addCategoria, updateCategoria, deleteCategoria, getCategoriaPorCodigo } = require('../controllers/categoriaController');

const rotasCategorias = new Router();

rotasCategorias.route('/categoria')
    //.get(verificaJWT, getCategorias)
    //.post(verificaJWT, addCategoria)
    //.put(verificaJWT, updateCategoria)
    .get( getCategorias)
    .post( addCategoria)
    .put( updateCategoria)

rotasCategorias.route('/categoria/:codigo')
    //.get(verificaJWT, getCategoriaPorCodigo)
    //.delete(verificaJWT, deleteCategoria)
    .get( getCategoriaPorCodigo)
    .delete( deleteCategoria)

module.exports = { rotasCategorias };