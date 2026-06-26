CREATE DATABASE IF NOT EXISTS mdclothing;
USE mdclothing;

-- ===========================
-- TABELA DE USUÁRIOS
-- ===========================
CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- ===========================
-- TABELA DE ESTILOS
-- ===========================
CREATE TABLE estilos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- ===========================
-- TABELA DE PRODUTOS
-- ===========================
CREATE TABLE produtos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estilo_id INT NOT NULL,
    imagem VARCHAR(255),
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (estilo_id) REFERENCES estilos(id)
);

-- ===========================
-- INSERT DOS ESTILOS
-- ===========================
INSERT INTO estilos (nome) VALUES
('Casual'),
('Esportivo'),
('Formal'),
('Streetwear'),
('Vintage'),
('Minimalista');

-- ===========================
-- INSERT DOS PRODUTOS
-- ===========================
INSERT INTO produtos (nome, descricao, preco, estilo_id, imagem) VALUES
('Camiseta Básica', 'Camiseta casual de algodão', 59.90, 1, 'camiseta-basica.jpg'),
('Moletom Esportivo', 'Moletom confortável para esportes', 149.90, 2, 'moletom-esportivo.jpg'),
('Camisa Social', 'Camisa social slim fit', 129.90, 3, 'camisa-social.jpg'),
('Camiseta Oversized', 'Modelo streetwear oversized', 99.90, 4, 'oversized.jpg'),
('Jaqueta Vintage', 'Jaqueta jeans retrô', 219.90, 5, 'jaqueta-vintage.jpg'),
('Camiseta Minimal', 'Design minimalista', 79.90, 6, 'minimalista.jpg');

-- ===========================
-- INSERT DE USUÁRIO
-- Senha: 123456
-- (Substitua pelo hash gerado pela sua API caso necessário)
-- ===========================
INSERT INTO usuarios (nome, email, senha)
VALUES
(
'Henrique Prestes',
'henrique@email.com',
'$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy'
);

-- ===========================
-- CONSULTA COM INNER JOIN
-- ===========================
SELECT
    p.id,
    p.nome,
    p.descricao,
    p.preco,
    p.imagem,
    e.nome AS estilo
FROM produtos p
INNER JOIN estilos e
ON p.estilo_id = e.id;