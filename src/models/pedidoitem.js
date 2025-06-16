'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PedidoItem extends Model {
    static associate(models) {
      PedidoItem.belongsTo(models.Pedido, { foreignKey: 'pedido_id' });
      PedidoItem.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'Produto' });
    }
  }
  PedidoItem.init({
    pedido_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'PedidoItem',
  });
  return PedidoItem;
};
