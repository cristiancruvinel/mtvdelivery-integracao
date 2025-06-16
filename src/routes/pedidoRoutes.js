const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

router.post('/', controller.criar);
router.get('/cliente/:id', controller.listarPorCliente);
router.patch('/:id/status', controller.atualizarStatus);
router.get('/:id', controller.buscarPorId); // << nova rota

module.exports = router;
