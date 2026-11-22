-- Banco: voidtv (PostgreSQL)
-- Criar o banco antes:  CREATE DATABASE voidtv;
-- Executar este arquivo dentro do banco voidtv.

DROP TABLE IF EXISTS filmes;
DROP TABLE IF EXISTS generos;

CREATE TABLE generos (
    id   SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE filmes (
    id        SERIAL PRIMARY KEY,
    titulo    VARCHAR(150) NOT NULL,
    ano       INTEGER NOT NULL CHECK (ano >= 1888),
    duracao   INTEGER NOT NULL CHECK (duracao > 0),
    genero_id INTEGER NOT NULL REFERENCES generos(id)
);

-- Dados iniciais
INSERT INTO generos (nome) VALUES ('Ação'), ('Romance'), ('Suspense'), ('Terror');

INSERT INTO filmes (titulo, ano, duracao, genero_id) VALUES
    ('Kill Bill', 2003, 111, 1),
    ('La La Land', 2016, 128, 2),
    ('Oldboy', 2003, 120, 3);
