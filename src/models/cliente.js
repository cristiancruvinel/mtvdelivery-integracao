'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // futura relação com pedidos
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
