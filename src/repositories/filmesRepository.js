import pool from "../db.js";

// Todo o SQL de filmes fica aqui. As rotas não conhecem o banco.
const SELECT_FILME = `
    SELECT f.id, f.titulo, f.ano, f.duracao, f.genero_id, g.nome AS genero
    FROM filmes f
    JOIN generos g ON g.id = f.genero_id
`;

export async function listar() {
    const result = await pool.query(`${SELECT_FILME} ORDER BY f.id`);
    return result.rows;
}

export async function buscarPorId(id) {
    const result = await pool.query(`${SELECT_FILME} WHERE f.id = $1`, [id]);
    return result.rows[0]; // undefined se não existir
}

export async function criar({ titulo, ano, duracao, genero_id }) {
    const result = await pool.query(
        "INSERT INTO filmes (titulo, ano, duracao, genero_id) VALUES ($1, $2, $3, $4) RETURNING id",
        [titulo, ano, duracao, genero_id]
    );
    return buscarPorId(result.rows[0].id);
}

export async function atualizar(id, { titulo, ano, duracao, genero_id }) {
    const result = await pool.query(
        "UPDATE filmes SET titulo = $1, ano = $2, duracao = $3, genero_id = $4 WHERE id = $5",
        [titulo, ano, duracao, genero_id, id]
    );
    if (result.rowCount === 0) {
        return undefined;
    }
    return buscarPorId(id);
}

export async function excluir(id) {
    const result = await pool.query("DELETE FROM filmes WHERE id = $1", [id]);
    return result.rowCount > 0;
}
