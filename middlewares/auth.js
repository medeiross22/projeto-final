const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {

    try {

        // Captura o token enviado no Header
        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                mensagem: 'Token não informado'
            });

        }

        // Remove a palavra Bearer
        const token = authHeader.split(' ')[1];

        // Verifica o token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Salva os dados do usuário na requisição
        req.usuario = decoded;

        // Continua para a próxima função
        next();

    } catch (error) {

        return res.status(401).json({
            mensagem: 'Token inválido'
        });

    }

};

module.exports = verificarToken;