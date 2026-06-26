const conexao = require('../../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/usuarios/cadastro
const cadastrarUsuario = async (req, res) => {
    try {
        const {
            nome,
            email,
            senha
        } = req.body;
        // Validação básica
        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: 'Nome, email e senha são obrigatórios'
            });
        }
        // Verifica se o email já existe
        const [usuarioExistente] = await conexao.query(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
        if (usuarioExistente.length > 0) {
            return res.status(400).json({
                mensagem: 'Email já cadastrado'
            });
        }
        // Criptografa a senha
        const senhaHash = await bcrypt.hash(senha, 10);
        // Salva usuário
        const [resultado] = await conexao.query(
            `INSERT INTO usuarios
            (nome, email, senha)
            VALUES (?, ?, ?)`,
            [
                nome,
                email,
                senhaHash
            ]
        );
        res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso',
            id: resultado.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário'
        });
    }
};
// POST /api/usuarios/login
const loginUsuario = async (req, res) => {
    try {
        const {
            email,
            senha
        } = req.body;
        // Verifica se os campos foram enviados
        if (!email || !senha) {
            return res.status(400).json({
                mensagem: 'Email e senha são obrigatórios'
            });
        }
        // Procura o usuário pelo email
        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
        if (usuarios.length === 0) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }
        const usuario = usuarios[0];
        // Compara a senha digitada com a senha criptografada
        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );
        if (!senhaValida) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }
        // Gera o token JWT
        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );
        res.status(200).json({
            mensagem: 'Login realizado com sucesso',
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensagem: 'Erro ao realizar login'
        });
    }
};
module.exports = {
    cadastrarUsuario,
    loginUsuario
};