# Log de Desenvolvimento — ETAPA 07
## Persistência e CRUD com Banco de Dados

---

## 1. Objetivo

Substituir o array em memória da API de filmes (etapa 06) por um banco de dados real, mantendo os dados após reiniciar a aplicação.

---

## 2. Banco escolhido e justificativa

Foi escolhido o **PostgreSQL** (relacional).

- Os dados do projeto são bem estruturados (filme tem título, ano, duração) e se relacionam entre si (filme pertence a um gênero), o que se encaixa bem no modelo relacional.
- A chave estrangeira garante que um filme nunca aponte para um gênero que não existe.
- Os `CHECK` e `NOT NULL` do banco funcionam como uma segunda camada de validação.
- É gratuito e muito usado no mercado.

Biblioteca usada no Node.js: `pg`.

---

## 3. Modelo do banco

```text
┌─────────────┐          ┌──────────────────┐
│   generos   │ 1      N │      filmes      │
├─────────────┤──────────├──────────────────┤
│ id (PK)     │          │ id (PK)          │
│ nome        │          │ titulo           │
└─────────────┘          │ ano              │
                         │ duracao          │
                         │ genero_id (FK)   │
                         └──────────────────┘
```

### Entidades

**generos**

| Coluna | Tipo | Regra |
|---|---|---|
| `id` | SERIAL | chave primária |
| `nome` | VARCHAR(50) | obrigatório, único |

**filmes**

| Coluna | Tipo | Regra |
|---|---|---|
| `id` | SERIAL | chave primária |
| `titulo` | VARCHAR(150) | obrigatório |
| `ano` | INTEGER | obrigatório, `>= 1888` |
| `duracao` | INTEGER | obrigatória, `> 0` (minutos) |
| `genero_id` | INTEGER | obrigatório, chave estrangeira para `generos(id)` |

### Relacionamento

- **Um gênero tem vários filmes** e **cada filme pertence a um único gênero** (1:N).
- A relação é feita pela coluna `filmes.genero_id`.
- Não é possível cadastrar um filme com `genero_id` inexistente.

---

## 4. Como criar o banco

Pré-requisito: PostgreSQL instalado e em execução.

```bash
# 1. Criar o banco
psql -U postgres -c "CREATE DATABASE voidtv;"

# 2. Criar as tabelas e inserir os dados iniciais
psql -U postgres -d voidtv -f database/schema.sql

# 3. Instalar as dependências e rodar
cd src
npm install
node index.js
```

A conexão usa por padrão `localhost:5432`, usuário `postgres`, senha `postgres`, banco `voidtv`. Para mudar, defina as variáveis de ambiente `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_NAME` (ou edite `src/db.js`).

---

## 5. Organização do código (baixo acoplamento)

```text
src/
├── db.js                          # conexão com o PostgreSQL (único lugar que a conhece)
├── repositories/
│   ├── filmesRepository.js        # SQL de filmes
│   └── generosRepository.js       # SQL de gêneros
└── routes/
    ├── filmes.js                  # HTTP + validações de filmes
    └── generos.js                 # HTTP + validações de gêneros
```

- As **rotas** só tratam requisição, validação e resposta. Não têm SQL.
- Os **repositories** só falam com o banco. Não conhecem `req` nem `res`.
- Se o banco mudar, só `db.js` e os repositories precisam ser alterados.

---

## 6. Validações

Feitas na API antes de chegar ao banco:

- `titulo`: texto não vazio, até 150 caracteres.
- `ano`: inteiro, maior ou igual a 1888.
- `duracao`: inteiro maior que 0.
- `genero_id`: inteiro positivo.
- `:id` da URL: inteiro positivo.

O banco valida novamente com `NOT NULL`, `CHECK`, `UNIQUE` e chave estrangeira.

---

## 7. Tratamento de erros de persistência

Os erros do banco são tratados no middleware de erros do `index.js`:

| Situação | Código PostgreSQL | Resposta |
|---|---|---|
| `genero_id` que não existe | `23503` | `400` |
| Nome de gênero repetido | `23505` | `409` |
| Banco fora do ar / senha ou banco inválidos | `ECONNREFUSED`, `28P01`, `3D000` | `503` |
| Qualquer outro erro | — | `500` (detalhe só no console) |

---

## 8. Endpoints

| Método | Rota | Descrição | Sucesso |
|---|---|---|---|
| GET | `/api/filmes` | Lista filmes (com o nome do gênero) | `200` |
| GET | `/api/filmes/:id` | Consulta um filme | `200` |
| POST | `/api/filmes` | Cria um filme | `201` |
| PUT | `/api/filmes/:id` | Altera um filme | `200` |
| DELETE | `/api/filmes/:id` | Exclui um filme | `204` |
| GET | `/api/generos` | Lista gêneros | `200` |
| POST | `/api/generos` | Cria um gênero | `201` |

> Mudança em relação à etapa 06: o filme agora recebe `genero_id` (número) no lugar de `genero` (texto). A resposta devolve os dois: `genero_id` e `genero` (nome).

---

## 9. Exemplos de operações CRUD

### Create — POST /api/filmes

```bash
curl -X POST http://localhost:3000/api/filmes \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Scream","ano":1996,"duracao":111,"genero_id":4}'
```

Resposta `201`:

```json
{ "id": 4, "titulo": "Scream", "ano": 1996, "duracao": 111, "genero_id": 4, "genero": "Terror" }
```

Gênero inexistente (`"genero_id":99`), resposta `400`:

```json
{ "erro": "genero_id não corresponde a um gênero existente." }
```

Dados inválidos (`{"titulo":""}`), resposta `400`:

```json
{
  "erro": "Dados inválidos.",
  "detalhes": [
    "titulo é obrigatório e deve ser um texto.",
    "ano é obrigatório e deve ser um número inteiro válido.",
    "duracao é obrigatória e deve ser um número inteiro maior que 0 (minutos).",
    "genero_id é obrigatório e deve ser o id de um gênero existente."
  ]
}
```

### Read — GET /api/filmes e GET /api/filmes/:id

```bash
curl http://localhost:3000/api/filmes
curl http://localhost:3000/api/filmes/1
```

Resposta `200` de `/api/filmes/1`:

```json
{ "id": 1, "titulo": "Kill Bill", "ano": 2003, "duracao": 111, "genero_id": 1, "genero": "Ação" }
```

Filme inexistente (`/api/filmes/99`), resposta `404`:

```json
{ "erro": "Filme não encontrado." }
```

### Update — PUT /api/filmes/:id

```bash
curl -X PUT http://localhost:3000/api/filmes/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Kill Bill: Vol. 1","ano":2003,"duracao":111,"genero_id":1}'
```

Resposta `200`:

```json
{ "id": 1, "titulo": "Kill Bill: Vol. 1", "ano": 2003, "duracao": 111, "genero_id": 1, "genero": "Ação" }
```

### Delete — DELETE /api/filmes/:id

```bash
curl -X DELETE http://localhost:3000/api/filmes/1
```

Resposta `204` (sem corpo).

### Gêneros

```bash
curl http://localhost:3000/api/generos

curl -X POST http://localhost:3000/api/generos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ficção Científica"}'
```

Nome repetido, resposta `409`:

```json
{ "erro": "Registro já existe." }
```

---

## 10. Persistência

Para conferir: criar um filme com POST, parar o servidor (`Ctrl+C`), subir de novo (`node index.js`) e consultar `GET /api/filmes`. O filme criado continua na lista, pois está gravado no PostgreSQL.
