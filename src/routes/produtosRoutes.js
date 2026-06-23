
const express = require('express');
const router = express.Router();
const verificarToken = require('../../middlewares/auth');
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.listarProdutos);

router.get('/com-estilo', produtosController.listarProdutosComEstilo);

router.get('/:id', produtosController.buscarProdutoPorId);

router.post(
    '/',
    verificarToken,
    produtosController.criarProduto
);

router.put(
    '/:id',
    verificarToken,
    produtosController.atualizarProduto
);

router.delete(
    '/:id',
    verificarToken,
    produtosController.deletarProduto
);

module.exports = router;