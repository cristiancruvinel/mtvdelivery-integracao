const produtoService = require('../services/produtoService');

module.exports = {
  async listar(req, res) {
    const produtos = await produtoService.listar();
    res.json(produtos);
  },

  async criar(req, res) {
    const novoProduto = await produtoService.criar(req.body);
    res.status(201).json(novoProduto);
  },

  async alterarAtivo(req, res) {
    const { id } = req.params;
    const produto = await produtoService.alterarAtivo(id);
    res.json(produto);
  }
};
