const { Produto } = require('../models');

module.exports = {
  async listar() {
    return await Produto.findAll();
  },

  async criar(dados) {
    return await Produto.create(dados);
  },

  async alterarAtivo(id) {
    const produto = await Produto.findByPk(id);
    if (!produto) throw new Error('Produto não encontrado');
    produto.ativo = !produto.ativo;
    await produto.save();
    return produto;
  }
};
