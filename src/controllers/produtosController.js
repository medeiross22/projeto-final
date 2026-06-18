const conexao = require('../../config/db');

const listarProdutos = async (req, res) => {
    try {
        const { estilo } = req.query;          // pega ?estilo=casual

        let query = `
            SELECT p.id, p.nome, p.descricao, p.preco, e.nome AS estilo, p.imagem
            FROM produtos p
            INNER JOIN estilos e ON p.estilo_id = e.id
        `;
        const params = [];

        if (estilo) {
            query += ' WHERE e.nome = ?';
            params.push(estilo);
        }

        const [produtos] = await conexao.query(query, params);
        res.json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
    }
};

module.exports = { listarProdutos };