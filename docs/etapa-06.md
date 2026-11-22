# Log de Desenvolvimento — ETAPA 06
## API REST da Aplicação

---

## 1. Objetivo

Disponibilizar um recurso da aplicação (**filmes**) por meio de uma API REST em Node.js/Express, retornando dados em JSON.

- Recurso principal: `filmes`
- URL base: `http://localhost:3000/api/filmes`
- Os dados ficam guardados em um array em memória (reiniciar o servidor volta aos 3 filmes iniciais).

### Estrutura de um filme

| Campo | Tipo | Regra |
|---|---|---|
| `id` | número | gerado pelo servidor |
| `titulo` | texto | obrigatório, não vazio |
| `ano` | inteiro | obrigatório, maior ou igual a 1888 |
| `genero` | texto | obrigatório, não vazio |
| `duracao` | inteiro | obrigatório, maior que 0 (minutos) |

---

## 2. Como executar

```bash
cd src
npm install
node index.js
```

O servidor sobe em `http://localhost:3000`.

Para testar: importar o arquivo `docs/VoidTV.postman_collection.json` no Postman (ou usar os exemplos de `curl` abaixo).

---

## 3. Organização

- `src/index.js`: configura o `express.json()` e monta as rotas em `/api/filmes`.
- `src/routes/filmes.js`: todas as rotas e validações do recurso filmes.

---

## 4. Endpoints

| Método | Rota | Descrição | Sucesso |
|---|---|---|---|
| GET | `/api/filmes` | Lista todos os filmes | `200` |
| GET | `/api/filmes/:id` | Consulta um filme | `200` |
| POST | `/api/filmes` | Cria um filme | `201` |
| PUT | `/api/filmes/:id` | Altera um filme (todos os campos) | `200` |
| DELETE | `/api/filmes/:id` | Exclui um filme | `204` |

### Códigos HTTP e erros

| Código | Quando |
|---|---|
| `200` | Consulta ou alteração com sucesso |
| `201` | Filme criado |
| `204` | Filme excluído (sem corpo) |
| `400` | ID inválido, dados inválidos ou JSON malformado |
| `404` | Filme ou rota não encontrada |
| `500` | Erro interno |

Todos os erros seguem o mesmo formato:

```json
{ "erro": "Mensagem do erro" }
```

Erros de validação incluem também a lista `detalhes`.

---

## 5. Exemplos

### 5.1. GET /api/filmes

```bash
curl http://localhost:3000/api/filmes
```

Resposta `200`:

```json
[
  { "id": 1, "titulo": "Kill Bill", "ano": 2003, "genero": "Ação", "duracao": 111 },
  { "id": 2, "titulo": "La La Land", "ano": 2016, "genero": "Romance", "duracao": 128 },
  { "id": 3, "titulo": "Oldboy", "ano": 2003, "genero": "Suspense", "duracao": 120 }
]
```

### 5.2. GET /api/filmes/:id

```bash
curl http://localhost:3000/api/filmes/1
```

Resposta `200`:

```json
{ "id": 1, "titulo": "Kill Bill", "ano": 2003, "genero": "Ação", "duracao": 111 }
```

Filme inexistente (`/api/filmes/99`), resposta `404`:

```json
{ "erro": "Filme não encontrado." }
```

ID inválido (`/api/filmes/abc`), resposta `400`:

```json
{ "erro": "ID inválido." }
```

### 5.3. POST /api/filmes

```bash
curl -X POST http://localhost:3000/api/filmes \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Scream","ano":1996,"genero":"Terror","duracao":111}'
```

Resposta `201`:

```json
{ "id": 4, "titulo": "Scream", "ano": 1996, "genero": "Terror", "duracao": 111 }
```

Com dados inválidos (`{"titulo":"","ano":"abc"}`), resposta `400`:

```json
{
  "erro": "Dados inválidos.",
  "detalhes": [
    "titulo é obrigatório e deve ser um texto.",
    "ano é obrigatório e deve ser um número inteiro válido.",
    "genero é obrigatório e deve ser um texto.",
    "duracao é obrigatória e deve ser um número inteiro maior que 0 (minutos)."
  ]
}
```

### 5.4. PUT /api/filmes/:id

```bash
curl -X PUT http://localhost:3000/api/filmes/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Kill Bill: Vol. 1","ano":2003,"genero":"Ação","duracao":111}'
```

Resposta `200`:

```json
{ "id": 1, "titulo": "Kill Bill: Vol. 1", "ano": 2003, "genero": "Ação", "duracao": 111 }
```

### 5.5. DELETE /api/filmes/:id

```bash
curl -X DELETE http://localhost:3000/api/filmes/1
```

Resposta `204` (sem corpo).

---

## 6. Coleção Postman

Arquivo: `docs/VoidTV.postman_collection.json` (File > Import no Postman). Contém uma requisição para cada endpoint acima.
