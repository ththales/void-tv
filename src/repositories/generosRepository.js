import pool from "../db.js";

export async function listar() {
    const result = await pool.query("SELECT id, nome FROM generos ORDER BY id");
    return result.rows;
}

export async function criar(nome) {
    const result = await pool.query(
        "INSERT INTO generos (nome) VALUES ($1) RETURNING id, nome",
        [nome]
    );
    return result.rows[0];
}
