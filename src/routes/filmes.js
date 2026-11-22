import express from "express";

const router = express.Router();

// "Banco de dados" em memória (some quando o servidor reinicia)
let filmes = [
    { id: 1, titulo: "Kill Bill", ano: 2003, genero: "Ação", duracao: 111 },
    { id: 2, titulo: "La La Land", ano: 2016, genero: "Romance", duracao: 128 },
    { id: 3, titulo: "Oldboy", ano: 2003, genero: "Suspense", duracao: 120 }
];
let proximoId = 4;

// Valida os dados recebidos e retorna uma lista de erros
function validar(body) {
    const erros = [];

    if (typeof body.titulo !== "string" || body.titulo.trim() === "") {
        erros.push("titulo é obrigatório e deve ser um texto.");
    }
    if (!Number.isInteger(body.ano) || body.ano < 1888) {
        erros.push("ano é obrigatório e deve ser um número inteiro válido.");
    }
    if (typeof body.genero !== "string" || body.genero.trim() === "") {
        erros.push("genero é obrigatório e deve ser um texto.");
    }
    if (!Number.isInteger(body.duracao) || body.duracao <= 0) {
        erros.push("duracao é obrigatória e deve ser um número inteiro maior que 0 (minutos).");
    }

    return erros;
}

// Valida o :id e busca o filme. Retorna { filme } ou { status, erro }
function buscarFilme(idParam) {
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
        return { status: 400, erro: "ID inválido." };
    }

    const filme = filmes.find((f) => f.id === id);

    if (!filme) {
        return { status: 404, erro: "Filme não encontrado." };
    }

    return { filme };
}

// GET /api/filmes - lista todos
router.get("/", (req, res) => {
    res.status(200).json(filmes);
});

// GET /api/filmes/:id - consulta individual
router.get("/:id", (req, res) => {
    const resultado = buscarFilme(req.params.id);

    if (!resultado.filme) {
        return res.status(resultado.status).json({ erro: resultado.erro });
    }

    res.status(200).json(resultado.filme);
});

// POST /api/filmes - cria
router.post("/", (req, res) => {
    const body = req.body ?? {};
    const erros = validar(body);

    if (erros.length > 0) {
        return res.status(400).json({ erro: "Dados inválidos.", detalhes: erros });
    }

    const novo = {
        id: proximoId++,
        titulo: body.titulo.trim(),
        ano: body.ano,
        genero: body.genero.trim(),
        duracao: body.duracao
    };

    filmes.push(novo);
    res.status(201).json(novo);
});

// PUT /api/filmes/:id - altera
router.put("/:id", (req, res) => {
    const resultado = buscarFilme(req.params.id);

    if (!resultado.filme) {
        return res.status(resultado.status).json({ erro: resultado.erro });
    }

    const body = req.body ?? {};
    const erros = validar(body);

    if (erros.length > 0) {
        return res.status(400).json({ erro: "Dados inválidos.", detalhes: erros });
    }

    const filme = resultado.filme;
    filme.titulo = body.titulo.trim();
    filme.ano = body.ano;
    filme.genero = body.genero.trim();
    filme.duracao = body.duracao;

    res.status(200).json(filme);
});

// DELETE /api/filmes/:id - exclui
router.delete("/:id", (req, res) => {
    const resultado = buscarFilme(req.params.id);

    if (!resultado.filme) {
        return res.status(resultado.status).json({ erro: resultado.erro });
    }

    filmes = filmes.filter((f) => f.id !== resultado.filme.id);
    res.status(204).send();
});

export default router;
