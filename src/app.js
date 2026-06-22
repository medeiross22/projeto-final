const express = require('express');

const app = express();

// Middleware para receber JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API MdClothing funcionando!'
    });
});

module.exports = app;