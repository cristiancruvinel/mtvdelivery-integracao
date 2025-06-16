const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.listar);
router.post('/', controller.criar);
router.patch('/:id/ativo', controller.alterarAtivo);

module.exports = router;
