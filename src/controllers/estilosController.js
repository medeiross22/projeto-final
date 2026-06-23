const conexao = require('../../config/db');

// GET /api/estilos/:id/produtos
const listarProdutosPorEstilo = async (req, res) => {

    try {

        // Captura o id do estilo enviado na URL
        const { id } = req.params;

        // Verifica se o estilo existe
        const [estilo] = await conexao.query(
            'SELECT * FROM estilos WHERE id = ?',
            [id]
        );

        if (estilo.length === 0) {
            return res.status(404).json({
                mensagem: 'Estilo não encontrado'
            });
        }

        // Busca os produtos daquele estilo
        const [produtos] = await conexao.query(
            `SELECT
                p.id,
                p.nome,
                p.descricao,
                p.preco,
                p.imagem
            FROM produtos p
            WHERE p.estilo_id = ?`,
            [id]
        );

        res.status(200).json(produtos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao buscar produtos do estilo'
        });

    }

};

module.exports = {
    listarProdutosPorEstilo
};