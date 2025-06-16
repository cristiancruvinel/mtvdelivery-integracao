const clienteService = require('../services/clienteService');

module.exports = {
  async listar(req, res) {
    const clientes = await clienteService.listar();
    res.json(clientes);
  },

  async criar(req, res) {
    const novoCliente = await clienteService.criar(req.body);
    res.status(201).json(novoCliente);
  }
};
