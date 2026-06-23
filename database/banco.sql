CREATE DATABASE IF NOT EXISTS mdclothing;
USE mdclothing;

-- ==========================
-- TABELA DE USUÁRIOS
-- ==========================

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- ==========================
-- TABELA DE ESTILOS
-- ==========================

CREATE TABLE estilos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- ==========================
-- TABELA DE PRODUTOS
-- ==========================

CREATE TABLE produtos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estilo_id INT NOT NULL,
    imagem VARCHAR(255),
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    CONSTRAINT fk_produto_estilo
        FOREIGN KEY (estilo_id)
        REFERENCES estilos(id)
);

-- ==========================
-- ESTILOS PADRÃO
-- ==========================

INSERT INTO estilos (nome) VALUES
('casual'),
('esportivo'),
('formal'),
('streetwear'),
('vintage'),
('minimalista');

-- ==========================
-- PRODUTOS DE TESTE
-- ==========================

INSERT INTO produtos
(nome, descricao, preco, estilo_id, imagem)
VALUES

(
'Camiseta Oversized Preta',
'Camiseta oversized preta em algodão premium',
89.90,
4,
'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
),

(
'Camiseta Casual Branca',
'Camiseta casual branca básica',
59.90,
1,
'https://images.unsplash.com/photo-1576566588028-4147f3842f27'
),

(
'Camiseta Esportiva Dry Fit',
'Camiseta esportiva para treinos',
79.90,
2,
'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
),

(
'Camisa Social Slim',
'Camisa social masculina slim fit',
149.90,
3,
'https://images.unsplash.com/photo-1603252109303-2751441dd157'
),

(
'Camiseta Vintage Classic',
'Camiseta vintage inspirada nos anos 90',
99.90,
5,
'https://images.unsplash.com/photo-1503341504253-dff4815485f1'
),

(
'Camiseta Minimalista Bege',
'Camiseta minimalista com design clean',
69.90,
6,
'https://images.unsplash.com/photo-1523398002811-999ca8dec234'
);