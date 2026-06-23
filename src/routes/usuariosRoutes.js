const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

// Cadastro
router.post('/cadastro', usuariosController.cadastrarUsuario);

// Login
router.post('/login', usuariosController.loginUsuario);

module.exports = router;