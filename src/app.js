const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API do projeto final funcionando');
});


module.exports = app;