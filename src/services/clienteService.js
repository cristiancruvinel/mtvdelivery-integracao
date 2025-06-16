const { Cliente } = require('../models');

module.exports = {
  async listar() {
    return await Cliente.findAll();
  },

  async criar(dados) {
    return await Cliente.create(dados);
  }
};
