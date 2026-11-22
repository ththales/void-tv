import pg from "pg";

// Única parte do projeto que conhece a conexão com o PostgreSQL.
// Os valores podem ser trocados por variáveis de ambiente.
const pool = new pg.Pool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "voidtv"
});

export default pool;
