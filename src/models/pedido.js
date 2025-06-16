'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'Cliente' });
      Pedido.hasMany(models.PedidoItem, { foreignKey: 'pedido_id', as: 'PedidoItems' });
    }
  }
  Pedido.init({
    cliente_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};
