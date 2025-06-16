const { Pedido, PedidoItem, Produto, Cliente } = require('../models');

module.exports = {
  async criar(dados) {
    const { cliente_id, itens } = dados;

    const pedido = await Pedido.create({ cliente_id });

    const itensProcessados = await Promise.all(
      itens.map(async (item) => {
        const produto = await Produto.findByPk(item.produto_id);
        if (!produto) throw new Error(`Produto ID ${item.produto_id} não encontrado`);

        return {
          pedido_id: pedido.id,
          produto_id: produto.id,
          quantidade: item.quantidade,
          preco_unitario: produto.preco
        };
      })
    );

    await PedidoItem.bulkCreate(itensProcessados);
    return pedido;
  },

  async listarPorCliente(clienteId) {
    return await Pedido.findAll({ where: { cliente_id: clienteId } });
  },

  async atualizarStatus(pedidoId, novoStatus) {
    const pedido = await Pedido.findByPk(pedidoId);
    if (!pedido) throw new Error('Pedido não encontrado');
    pedido.status = novoStatus;
    await pedido.save();
    return pedido;
  },

  async buscarPorId(pedidoId) {
    const pedido = await Pedido.findByPk(pedidoId, {
      include: [
        {
          association: 'Cliente',
          attributes: ['id', 'nome', 'telefone', 'endereco']
        },
        {
          association: 'PedidoItems',
          include: [
            {
              association: 'Produto',
              attributes: ['id', 'nome', 'preco']
            }
          ]
        }
      ]
    });

    if (!pedido) throw new Error('Pedido não encontrado');
    return pedido;
  }
};
