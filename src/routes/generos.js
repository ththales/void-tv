import express from "express";
import * as generosRepository from "../repositories/generosRepository.js";

const router = express.Router();

// GET /api/generos - lista todos
router.get("/", async (req, res) => {
    const generos = await generosRepository.listar();
    res.status(200).json(generos);
});

// POST /api/generos - cria
router.post("/", async (req, res) => {
    const nome = req.body?.nome;

    if (typeof nome !== "string" || nome.trim() === "" || nome.trim().length > 50) {
        return res.status(400).json({
            erro: "Dados inválidos.",
            detalhes: ["nome é obrigatório e deve ser um texto de até 50 caracteres."]
        });
    }

    const novo = await generosRepository.criar(nome.trim());
    res.status(201).json(novo);
});

export default router;
