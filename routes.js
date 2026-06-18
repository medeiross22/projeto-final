const conexao = require('./config/db'); // conexão com o banco

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas públicas (GET)

// Listar estilos
app.get('/api/estilos', async (req, res) => {
    try {
        const [estilos] = await pool.query('SELECT * FROM estilos');
        res.json(estilos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao buscar estilos' });
    }
});

// Listar todos os produtos (com filtro opcional ?estilo=)
app.get('/api/produtos', async (req, res) => {
    try {
        const { estilo } = req.query;
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

        const [produtos] = await pool.query(query, params);
        res.json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
    }
});

// Detalhes de um produto
app.get('/api/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [produto] = await pool.query(
            `SELECT p.id, p.nome, p.descricao, p.preco, e.nome AS estilo, p.imagem
             FROM produtos p
             INNER JOIN estilos e ON p.estilo_id = e.id
             WHERE p.id = ?`,
            [id]
        );

        if (produto.length === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.json(produto[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao buscar produto' });
    }
});