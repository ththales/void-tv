// Imports
import express from "express";
import axios from "axios";
import filmesRouter from "./routes/filmes.js";
import generosRouter from "./routes/generos.js";

// Constantes
const port = 3000;
const app = express();
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODY5YzExYmFiYTlmNzlmMjk5MGZlNTZlNjYwOTJmNCIsIm5iZiI6MTc5NDE0ODk0OS42MDksInN1YiI6IjZhZjA4YTU1NzM0NTU3MTk2NjQ5YWFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3pxT0szgLyPXNiDN0I1Y9kFiFirlSG_uzBMF1FsQss";
const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODY5YzExYmFiYTlmNzlmMjk5MGZlNTZlNjYwOTJmNCIsIm5iZiI6MTc5NDE0ODk0OS42MDksInN1YiI6IjZhZjA4YTU1NzM0NTU3MTk2NjQ5YWFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3pxT0szgLyPXNiDN0I1Y9kFiFirlSG_uzBMF1FsQss'
  }
};


// Variáveis

// Middlewares
app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
});

// Rotas
app.get("/", (req, res) => {
    try {
        res.render(
            "index.ejs"
        );
    } catch(error) {
        res.render(
            "error.ejs",
            { error: error.message }
        );
    }
});

app.get("/home", async(req, res) => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/upcoming`,
            options
        );

        const movies = response.data.results;

        console.log(movies);

        res.locals.movies = movies;

        res.render(
            "home.ejs"
        );
    } catch(error) {
        res.render(
            "error.ejs",
            { error: error.message }
        );
    }
});

app.get("/genres", (req, res) => {
    try {
        res.render(
            "genres.ejs"
        );
    } catch(error) {
        res.render(
            "error.ejs",
            { error: error.message }
        );
    }
});

app.get("/watch/:movieId", async(req, res) => {
    let movieId = req.params.movieId;

    if(!movieId) {
        return res.status(400).render(
            "error.ejs",
            { error: "Nome do filme não informado." }
        );
    }

    try {
        const response = await axios.get(
            `${API_URL}/movie/${movieId}`,
            options
        );

        const movieInfo = response.data;

        console.log(movieInfo);

        res.locals.movieInfo = movieInfo;

        res.render(
            "player.ejs"
        );
    } catch(error) {
        res.render(
            "error.ejs",
            { error: error.message }
        );
    }
});

app.get("/popular", async(req, res) => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/popular`,
            options
        );
    
        const popular = response.data;
        
        console.log(popular);

        res.locals.popular = popular;

        res.render(
            "popular.ejs"
        );
    } catch(error) {
        res.render(
            "error.ejs",
            { error: error.message }
        );
    }


});

// API REST
app.use("/api/filmes", filmesRouter);
app.use("/api/generos", generosRouter);

app.use("/api", (req, res) => {
    res.status(404).json({ erro: "Rota não encontrada." });
});

// Erros da API (ex: JSON malformado no corpo da requisição)
app.use("/api", (err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ erro: "JSON inválido." });
    }
    // Erros do PostgreSQL
    if (err.code === "23503") { // chave estrangeira
        return res.status(400).json({ erro: "genero_id não corresponde a um gênero existente." });
    }
    if (err.code === "23505") { // valor duplicado (UNIQUE)
        return res.status(409).json({ erro: "Registro já existe." });
    }
    if (err.code === "ECONNREFUSED" || err.code === "28P01" || err.code === "3D000") {
        console.error("Falha de conexão com o banco:", err.message);
        return res.status(503).json({ erro: "Banco de dados indisponível." });
    }

    console.error(err);
    res.status(500).json({ erro: "Erro interno do servidor." });
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}`);
});