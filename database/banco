CREATE DATABASE IF NOT EXISTS mdclothing;
USE mdclothing;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    estilo_preferido VARCHAR(50),
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE estilos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

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

INSERT INTO estilos (nome) VALUES 
('casual'), ('esportivo'), ('formal'), 
('streetwear'), ('vintage'), ('minimalista');