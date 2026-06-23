
const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.listarProdutos);

router.get('/com-estilo', produtosController.listarProdutosComEstilo);

router.get('/:id', produtosController.buscarProdutoPorId);

router.post('/', produtosController.criarProduto);

router.put('/:id', produtosController.atualizarProduto);

router.delete('/:id', produtosController.deletarProduto);

module.exports = router;