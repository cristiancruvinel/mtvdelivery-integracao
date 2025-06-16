const pedidoService = require('../services/pedidoService');

module.exports = {
  async criar(req, res) {
    const pedido = await pedidoService.criar(req.body);
    res.status(201).json(pedido);
  },

  async listarPorCliente(req, res) {
    const pedidos = await pedidoService.listarPorCliente(req.params.id);
    res.json(pedidos);
  },

  async atualizarStatus(req, res) {
    const pedido = await pedidoService.atualizarStatus(req.params.id, req.body.status);
    res.json(pedido);
  },

  async buscarPorId(req, res) {
    const pedido = await pedidoService.buscarPorId(req.params.id);
    res.json(pedido);
  }
};
