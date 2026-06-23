const express = require('express');

const app = express();

// Permite receber JSON nas requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API MdClothing funcionando!'
    });
});

// Rotas de produtos
const produtosRoutes = require('./routes/produtosRoutes');
app.use('/api/produtos', produtosRoutes);

// Rotas de estilos
const estilosRoutes = require('./routes/estilosRoutes');
app.use('/api/estilos', estilosRoutes);

module.exports = app;