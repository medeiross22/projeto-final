CREATE DATABASE IF NOT EXISTS mdclothing;
USE mdclothing;

-- =========================
-- TABELA USUARIOS
-- =========================

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- =========================
-- TABELA ESTILOS
-- =========================

CREATE TABLE estilos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- =========================
-- TABELA PRODUTOS
-- =========================

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

-- =========================
-- ESTILOS
-- =========================

INSERT INTO estilos (nome)
VALUES
('casual'),
('esportivo'),
('formal'),
('streetwear'),
('vintage'),
('minimalista');

-- =========================
-- USUARIOS
-- =========================

INSERT INTO usuarios (nome, email, senha)
VALUES
('Henrique Prestes', 'henrique@gmail.com', '123456'),
('Maria Silva', 'maria@gmail.com', '123456'),
('Joao Santos', 'joao@gmail.com', '123456');

-- =========================
-- PRODUTOS
-- =========================

INSERT INTO produtos
(nome, descricao, preco, estilo_id, imagem)
VALUES
(
'Camiseta Oversized Preta',
'Camiseta oversized em algodao premium',
89.90,
4,
'camisa2.png'
),

(
'Camisa Branca',
'Camisa para eventos formais',
129.90,
3,
'camisa3.png'
),

(
'Camisa Vermelha Arabic',
'Confie em Deus',
179.90,
2,
'camisa4.png'
);

SELECT * FROM produtos;
SELECT
    p.id,
    p.nome,
    p.descricao,
    p.preco,
    e.nome AS estilo,
    p.imagem
FROM produtos p
INNER JOIN estilos e
ON p.estilo_id = e.id;

//aula 05
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


ALTER TABLE usuarios
DROP COLUMN estilo_preferido;