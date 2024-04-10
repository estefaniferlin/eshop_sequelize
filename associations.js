const Categoria = require('./entities/categoria');
const Produto = require('./entities/produto');

Produto.belongsTo(Categoria, { foreignKey: 'categoria', as: 'categoriaInfo' });
Categoria.hasMany(Produto, { foreignKey: 'categoria', as: 'produtos' });