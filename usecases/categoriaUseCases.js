const Categoria = require('../entities/categoria');

const getCategoriasDB = async () => {// metodos assincrono que para em algum momento pra esperar o processamento
    try {
        const categorias = await Categoria.findAll({
            order: [['nome', 'ASC']]
        });
        return categorias; // Isso retornará uma lista de instâncias do modelo Categoria
    } catch(err) {
        throw new Error("Erro ao buscar categorias: " + err.message);
    }
}

const addCategoriaDB = async (categoriaData) => {
    try {
        const categoria = await Categoria.create(categoriaData);
        return categoria; // Retorna a nova categoria criada
    } catch (err) {
        throw new Error("Erro ao adicionar categoria: " + err.message);
    }
};

const updateCategoriaDB = async (categoriaData) => {
    try {
        const { codigo, ...updateData } = categoriaData;
        const [updatedRows] = await Categoria.update(updateData, {
            where: { codigo }
        });
        if (updatedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser alterado`);
        }
        return await Categoria.findByPk(codigo);
    } catch (err) {
        throw new Error("Erro ao atualizar categoria: " + err.message);
    }
};

const deleteCategoriaDB = async (codigo) => {
    try {
        const deletedRows = await Categoria.destroy({
            where: { codigo }
        });
        if (deletedRows === 0) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo} para ser removido`);
        }
        return "Registro removido com sucesso";
    } catch (err) {
        throw new Error("Erro ao remover categoria: " + err.message);
    }
};

const getCategoriaPorCodigoDB = async (codigo) => {
    try {
        const categoria = await Categoria.findByPk(codigo);
        if (!categoria) {
            throw new Error(`Nenhum registro encontrado com o código ${codigo}`);
        }
        return categoria;
    } catch (err) {
        throw new Error("Erro ao recuperar categoria: " + err.message);
    }
};

module.exports = { getCategoriasDB, addCategoriaDB, updateCategoriaDB, deleteCategoriaDB, getCategoriaPorCodigoDB }