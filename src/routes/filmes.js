import express from "express";
import * as filmesRepository from "../repositories/filmesRepository.js";

const router = express.Router();

const MAX_INT = 2147483647; // limite do INTEGER do PostgreSQL

// Valida os dados recebidos e retorna uma lista de erros
function validar(body) {
    const erros = [];

    if (typeof body.titulo !== "string" || body.titulo.trim() === "") {
        erros.push("titulo é obrigatório e deve ser um texto.");
    } else if (body.titulo.trim().length > 150) {
        erros.push("titulo deve ter no máximo 150 caracteres.");
    }
    if (!Number.isInteger(body.ano) || body.ano < 1888 || body.ano > MAX_INT) {
        erros.push("ano é obrigatório e deve ser um número inteiro válido.");
    }
    if (!Number.isInteger(body.duracao) || body.duracao <= 0 || body.duracao > MAX_INT) {
        erros.push("duracao é obrigatória e deve ser um número inteiro maior que 0 (minutos).");
    }
    if (!Number.isInteger(body.genero_id) || body.genero_id <= 0 || body.genero_id > MAX_INT) {
        erros.push("genero_id é obrigatório e deve ser o id de um gênero existente.");
    }

    return erros;
}

// Converte o :id da URL em número. Retorna null se for inválido.
function lerId(idParam) {
    const id = Number(idParam);
    return Number.isInteger(id) && id > 0 && id <= MAX_INT ? id : null;
}

// Obs.: no Express 5 erros em funções async vão automaticamente para o
// middleware de erros do index.js (que trata os erros do banco).

// GET /api/filmes - lista todos
router.get("/", async (req, res) => {
    const filmes = await filmesRepository.listar();
    res.status(200).json(filmes);
});

// GET /api/filmes/:id - consulta individual
router.get("/:id", async (req, res) => {
    const id = lerId(req.params.id);
    if (!id) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    const filme = await filmesRepository.buscarPorId(id);
    if (!filme) {
        return res.status(404).json({ erro: "Filme não encontrado." });
    }

    res.status(200).json(filme);
});

// POST /api/filmes - cria
router.post("/", async (req, res) => {
    const body = req.body ?? {};
    const erros = validar(body);

    if (erros.length > 0) {
        return res.status(400).json({ erro: "Dados inválidos.", detalhes: erros });
    }

    const novo = await filmesRepository.criar({
        titulo: body.titulo.trim(),
        ano: body.ano,
        duracao: body.duracao,
        genero_id: body.genero_id
    });

    res.status(201).json(novo);
});

// PUT /api/filmes/:id - altera
router.put("/:id", async (req, res) => {
    const id = lerId(req.params.id);
    if (!id) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    const body = req.body ?? {};
    const erros = validar(body);

    if (erros.length > 0) {
        return res.status(400).json({ erro: "Dados inválidos.", detalhes: erros });
    }

    const filme = await filmesRepository.atualizar(id, {
        titulo: body.titulo.trim(),
        ano: body.ano,
        duracao: body.duracao,
        genero_id: body.genero_id
    });

    if (!filme) {
        return res.status(404).json({ erro: "Filme não encontrado." });
    }

    res.status(200).json(filme);
});

// DELETE /api/filmes/:id - exclui
router.delete("/:id", async (req, res) => {
    const id = lerId(req.params.id);
    if (!id) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    const excluiu = await filmesRepository.excluir(id);
    if (!excluiu) {
        return res.status(404).json({ erro: "Filme não encontrado." });
    }

    res.status(204).send();
});

export default router;
