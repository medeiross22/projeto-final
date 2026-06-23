const express = require('express');
const router = express.Router();

const estilosController = require('../controllers/estilosController');

// GET /api/estilos/:id/produtos
router.get('/:id/produtos', estilosController.listarProdutosPorEstilo);

module.exports = router;