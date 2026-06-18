const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API do projeto final funcionando');
});

// Rotas da API
const produtosRoutes = require('./routes/produtos');
app.use('/api/produtos', produtosRoutes); // prefixo /api/produtos

module.exports = app;