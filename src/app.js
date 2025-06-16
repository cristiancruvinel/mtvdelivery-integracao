const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API MTVDelivery rodando 🚀'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', produtoRoutes);

const clienteRoutes = require('./routes/clienteRoutes');
app.use('/clientes', clienteRoutes);

const pedidoRoutes = require('./routes/pedidoRoutes');
app.use('/pedidos', pedidoRoutes);