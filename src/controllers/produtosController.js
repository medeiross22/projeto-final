// Importa a conexão com o banco
const conexao = require('../../config/db');


// GET /api/produtos
const listarProdutos = async (req, res) => {

    try {

        // Busca todos os produtos
        const [produtos] = await conexao.query(
            'SELECT * FROM produtos'
        );

        // Retorna os produtos em JSON
        res.status(200).json(produtos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao buscar produtos'
        });

    }

};

//aula 05 inner join
const listarProdutosComEstilo = async (req, res) => {

    try {

        // Busca produtos juntamente com o nome do estilo
        const [produtos] = await conexao.query(`
            SELECT
                p.id,
                p.nome,
                p.descricao,
                p.preco,
                p.imagem,
                e.nome AS estilo
            FROM produtos p
            INNER JOIN estilos e
                ON p.estilo_id = e.id
        `);

        res.status(200).json(produtos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao buscar produtos com estilo'
        });

    }

};


// GET /api/produtos/:id
const buscarProdutoPorId = async (req, res) => {

    try {

        // Captura o ID enviado na URL
        const { id } = req.params;

        // Busca apenas um produto
        const [produto] = await conexao.query(
            'SELECT * FROM produtos WHERE id = ?',
            [id]
        );

        // Se não encontrou
        if (produto.length === 0) {

            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });

        }

        // Retorna o produto encontrado
        res.status(200).json(produto[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao buscar produto'
        });

    }

};

// POST /api/produtos
const criarProduto = async (req, res) => {

    try {

        // Recebe os dados enviados pelo cliente
        const {
            nome,
            descricao,
            preco,
            estilo_id,
            imagem
        } = req.body;

        // Validação básica
        if (!nome || !preco || !estilo_id) {

            return res.status(400).json({
                mensagem: 'Nome, preço e estilo são obrigatórios'
            });

        }

        // Verifica se o estilo existe
        const [estilo] = await conexao.query(
            'SELECT * FROM estilos WHERE id = ?',
            [estilo_id]
        );

        if (estilo.length === 0) {

            return res.status(404).json({
                mensagem: 'Estilo não encontrado'
            });

        }

        // Insere o produto no banco
        const [resultado] = await conexao.query(
            `INSERT INTO produtos
            (nome, descricao, preco, estilo_id, imagem)
            VALUES (?, ?, ?, ?, ?)`,
            [
                nome,
                descricao,
                preco,
                estilo_id,
                imagem
            ]
        );

        // Retorna sucesso
        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso',
            id: resultado.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar produto'
        });

    }

};

// PUT /api/produtos/:id
const atualizarProduto = async (req, res) => {

    try {

        // Captura o ID enviado na URL
        const { id } = req.params;

        // Captura os dados enviados no body
        const {
            nome,
            descricao,
            preco,
            estilo_id,
            imagem
        } = req.body;

        // Validação básica
        if (!nome || !preco || !estilo_id) {

            return res.status(400).json({
                mensagem: 'Nome, preço e estilo são obrigatórios'
            });

        }

        // Verifica se o produto existe
        const [produto] = await conexao.query(
            'SELECT * FROM produtos WHERE id = ?',
            [id]
        );

        if (produto.length === 0) {

            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });

        }

        // Verifica se o estilo existe
        const [estilo] = await conexao.query(
            'SELECT * FROM estilos WHERE id = ?',
            [estilo_id]
        );

        if (estilo.length === 0) {

            return res.status(404).json({
                mensagem: 'Estilo não encontrado'
            });

        }

        // Atualiza o produto
        await conexao.query(
            `UPDATE produtos
            SET nome = ?,
                descricao = ?,
                preco = ?,
                estilo_id = ?,
                imagem = ?
            WHERE id = ?`,
            [
                nome,
                descricao,
                preco,
                estilo_id,
                imagem,
                id
            ]
        );

        // Retorna sucesso
        res.status(200).json({
            mensagem: 'Produto atualizado com sucesso'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao atualizar produto'
        });

    }

};

// DELETE /api/produtos/:id
const deletarProduto = async (req, res) => {

    try {

        // Captura o ID enviado na URL
        const { id } = req.params;

        // Verifica se o produto existe
        const [produto] = await conexao.query(
            'SELECT * FROM produtos WHERE id = ?',
            [id]
        );

        if (produto.length === 0) {

            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });

        }

        // Remove o produto
        await conexao.query(
            'DELETE FROM produtos WHERE id = ?',
            [id]
        );

        // Retorna sucesso
        res.status(200).json({
            mensagem: 'Produto removido com sucesso'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Erro ao remover produto'
        });

    }

};

// Exporta as funções
module.exports = {
    listarProdutos,
    listarProdutosComEstilo,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};