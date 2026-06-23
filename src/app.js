const express = require('express');

const app = express();

app.use(express.json());

const produtosRoutes = require('./routes/produtosRoutes');

app.use('/api/produtos', produtosRoutes);

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API MdClothing funcionando!'
    });
});

module.exports = app;