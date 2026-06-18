const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Define a rota GET / no router, que corresponde a GET /api/produtos
router.get('/', produtosController.listarProdutos);

module.exports = router;