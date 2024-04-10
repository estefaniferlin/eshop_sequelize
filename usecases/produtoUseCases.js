const Produto = require('../entities/produto');
const Categoria = require('../entities/categoria');

const getProdutosDB = async () => {
    try {
        return await Produto.findAll({
            include: [{
                model: Categoria,
                as: 'categoriaInfo' // Assegure-se de que a associação está definida corretamente nos modelos
            }],
            order: [['codigo', 'ASC']]
        });
    } catch (err) {
        throw new Error("Erro ao buscar produtos: " + err.message);
    }
};

const addProdutoDB = async (produtoData) => {
    try {
        const produto = await Produto.create(produtoData);
        return produto; // Retorna o novo produto criado
    } catch (err) {
        throw new Error("Erro ao adicionar produto: " + err.message);
    }
};

const updateProdutoDB = async (produtoData) => {
    try {
        const { codigo, ...updateData } = produtoData;
        const [updatedRows] = await Produto.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Produto.findByPk(codigo, {
            include: [{ model: Categoria, as: 'categoriaInfo' }]
        });
    } catch (err) {
        throw new Error("Erro ao atualizar produto: " + err.message);
    }
};

const deleteProdutoDB = async (codigo) => {
    try {
        const deletedRows = await Produto.destroy({
            where: { codigo }
        });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Produto removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover produto: " + err.message);
    }
};

const getProdutoPorCodigoDB = async (codigo) => {
    try {
        const produto = await Produto.findByPk(codigo, {
            include: [{ model: Categoria, as: 'categoriaInfo' }]
        });
        if (!produto) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return produto;
    } catch (err) {
        throw new Error("Erro ao recuperar produto: " + err.message);
    }
};

module.exports = { getProdutosDB, addProdutoDB, updateProdutoDB, deleteProdutoDB, getProdutoPorCodigoDB }