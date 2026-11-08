# Log de Desenvolvimento — ETAPA 05
## Preparação do Back-end

---

## 1. Tecnologias utilizadas

- **Node.js:** ambiente de execução JavaScript no servidor.
- **Express:** framework utilizado para criação e gerenciamento do servidor e das rotas HTTP.
- **EJS (Embedded JavaScript):** template engine utilizada para renderização dinâmica das páginas HTML.
- **Axios:** biblioteca utilizada para realizar requisições HTTP às APIs externas.
- **Nodemon:** ferramenta utilizada para reiniciar automaticamente o servidor durante o desenvolvimento.

---

## 2. Inicialização e configuração do projeto

- Projeto NPM inicializado por meio do comando `npm init -y`.
- Arquivo principal `index.js` criado na raiz do projeto.
- Configurações do `package.json`:
  - `"main": "index.js"`: define o arquivo de entrada principal da aplicação.
  - `"type": "module"`: habilita a utilização de módulos ES (ECMAScript Modules), permitindo utilizar `import` e `export`.

---

## 3. Organização da estrutura de diretórios

Reorganização dos arquivos e diretórios para adequação à arquitetura do Express.

### 3.1. Diretório `/views`

- Arquivos HTML transferidos para o diretório `/views`:
  - `index.html`
  - `home.html`
  - `genres.html`
  - `player.html`
- Extensões dos arquivos alteradas de `.html` para `.ejs`, permitindo a utilização de templates dinâmicos e integração com dados enviados pelo servidor.
- Novas páginas adicionadas durante o desenvolvimento:
  - `popular.ejs`
  - `error.ejs`

### 3.2. Diretório `/public`

Centralização dos arquivos estáticos utilizados pelo Front-end.

- `/styles`: arquivos de estilização CSS.
- `/img`: imagens utilizadas na aplicação.
- `/scripts`: scripts JavaScript executados no lado do cliente.

---

## 4. Configuração do servidor Express

### 4.1. Inicialização do servidor

- Importação do Express utilizando módulos ES (`import`).
- Instância da aplicação criada por meio de `express()`.
- Porta configurada: `3000`.
- URL local: `http://localhost:3000/`.

### 4.2. Middleware para arquivos estáticos

- Configuração do middleware `express.static("public")`.
- Responsável por disponibilizar os arquivos estáticos da aplicação, incluindo:
  - Arquivos CSS.
  - Scripts JavaScript.
  - Imagens.

### 4.3. Middleware personalizado

Implementação de um middleware para disponibilizar o ano atual globalmente nos templates EJS.

- Utilização de `res.locals.year = new Date().getFullYear()`.
- A propriedade `res.locals` permite disponibilizar variáveis para os templates renderizados durante a requisição.
- Dessa forma, a variável `year` pode ser utilizada diretamente nas páginas EJS, sem precisar ser enviada individualmente em cada chamada de `res.render()`.

---

## 5. Configuração e integração com a API TMDB

### 5.1. API utilizada

**TMDB — The Movie Database**

- API URL: `https://api.themoviedb.org/3/`.
- Autenticação: API Key (chave de acesso gerada gratuitamente após cadastro e configuração de uma conta na plataforma TMDB).
- Constantes declaradas no arquivo principal:
  - `API_URL`: endereço-base da API.
  - `API_KEY`: chave de autenticação.
- Objeto `options` criado para centralizar os parâmetros de autenticação enviados no cabeçalho (`headers`) das requisições.

### 5.2. Requisições HTTP com Axios

- Utilização do Axios para realizar requisições à API TMDB.
- Utilização de `async/await` para trabalhar com operações assíncronas.
- Recuperação dos dados retornados pela API por meio de `response.data`.
- Tratamento de erros relacionados às requisições e à autenticação.

---

## 6. Implementação das rotas HTTP

Implementação das principais rotas da aplicação utilizando o método HTTP `GET` e o sistema de roteamento do Express.

| Rota | Funcionalidade |
|---|---|
| `GET /` | Renderiza a página inicial de login (`index.ejs`). |
| `GET /home` | Renderiza a página principal da aplicação (`home.ejs`). |
| `GET /genres` | Renderiza a página de gêneros de filmes (`genres.ejs`). |
| `GET /watch/:movieID` | Renderiza o player do filme selecionado (`player.ejs`). |
| `GET /popular` | Consulta a API TMDB e renderiza a listagem de filmes populares (`popular.ejs`). |

### 6.1. Rota `/`

- Responsável por renderizar a página inicial de login.
- Utilização de `res.render()` para carregar o template `index.ejs`.

### 6.2. Rota `/home`

- Responsável por renderizar a página principal da aplicação.
- Disponibilização da lista de filmes para o Front-end por meio de `res.locals.movies`.
- Integração dos dados recebidos com os componentes de exibição dos filmes.

### 6.3. Rota `/genres`

- Responsável por renderizar a página de gêneros de filmes.
- Estrutura preparada para implementação da integração com os gêneros disponibilizados pela API TMDB.

### 6.4. Rota `/watch/:movieID`

- Responsável por renderizar a página do player de filmes.
- Utilização de um parâmetro dinâmico de caminho (`:movieID`) para identificar o filme selecionado.
- Recuperação do identificador por meio de `req.params.movieID`.
- Utilização do identificador para consultar as informações do filme na API TMDB.
- Requisição realizada por meio do Axios, utilizando `async/await`:
  - Endpoint: `${API_URL}/movie/${movieID}`.
  - Dados recebidos armazenados em `movieInfo`, utilizando `response.data`.
- Envio das informações recuperadas para o template EJS por meio de `res.render()`.
- Disponibilização dos dados do filme para utilização no Front-end, incluindo seu nome por meio da variável `movieName`.
- Implementação de validação do parâmetro recebido, com retorno HTTP `400` para requisições com identificador inválido.

### 6.5. Rota `/popular`

- Responsável por consultar a API TMDB e exibir os filmes populares.
- Requisição realizada por meio do Axios.
- Criação do template `popular.ejs` para renderização dos resultados.
- Recuperação dos dados da resposta por meio de `response.data`.
- Utilização da propriedade `results` para acessar o array contendo os filmes retornados pela API.
- Iteração sobre os resultados para gerar dinamicamente os cards dos filmes:
  - Utilização de `popular.results.forEach()` na estrutura de renderização.
- Reprodução da estrutura visual dos cards anteriormente utilizada com scripts estáticos, substituindo os dados locais pelos dados dinâmicos da API.
- Conteúdo atualizado conforme os resultados retornados pela requisição.

**Teste de autenticação:**

- Erro HTTP `401 (Unauthorized)` simulado durante os testes.
- Causa: ausência dos parâmetros de autenticação no objeto `options`, enviado no cabeçalho da requisição.
- Resultado: a API recusou a requisição por falta de autenticação válida, permitindo testar o tratamento de erros da aplicação.

---

## 7. Renderização dinâmica com EJS

- Substituição gradual da utilização de dados estáticos pela renderização dinâmica de informações recebidas da API TMDB.
- Utilização de `res.render()` para renderizar templates EJS e disponibilizar dados recebidos pelo servidor.
- Utilização de variáveis e estruturas de repetição nos templates para gerar os componentes de forma dinâmica.
- Envio de informações entre o Back-end e o Front-end por meio de variáveis disponibilizadas durante a renderização.

### 7.1. Remoção dos scripts estáticos de renderização

- Scripts anteriormente responsáveis pela criação dos cards de filmes utilizando dados estáticos removidos.
- Renderização dos filmes transferida para o Back-end, utilizando os dados retornados pela API TMDB e os templates EJS.
- Scripts responsáveis pela filtragem dos filmes mantidos, pois continuam funcionando independentemente da origem dos dados.

---

## 8. Tratamento de erros

- Implementação de blocos `try/catch` nas rotas que realizam operações sujeitas a falhas.
- Utilização do `catch` para capturar exceções durante as requisições à API e demais operações assíncronas.
- Em caso de erro, renderização do template `error.ejs`.
- Envio da mensagem de erro ao template por meio do objeto `{ error: error.message }`.
- Implementação de validações de parâmetros nas rotas, com utilização de respostas HTTP apropriadas.

### Códigos HTTP utilizados nos testes

| Código | Descrição | Situação |
|---|---|---|
| `200` | OK | Requisições realizadas com sucesso. |
| `400` | Bad Request | Parâmetro inválido ou ausente. |
| `401` | Unauthorized | Falha de autenticação na API TMDB. |

---

## 9. Criação de componentes reutilizáveis (Partials)

Criação do diretório `/views/partials` para centralizar componentes compartilhados entre as páginas da aplicação.

### 9.1. `header.ejs`

- Centralização da estrutura do cabeçalho e da barra de navegação.
- Correção de problemas de responsividade.
- Padronização do tamanho e da disposição da barra de navegação em todas as páginas.
- Correção dos links de navegação para garantir o direcionamento adequado entre as rotas.

### 9.2. `footer.ejs`

- Centralização da estrutura do rodapé.
- Correção, atualização e padronização de textos e links.
- Implementação da exibição automática do ano atual.
- Integração com a variável global `year`, disponibilizada pelo middleware personalizado por meio de `res.locals`.

---

## 10. Ajustes e melhorias no Front-end

- Correção dos caminhos das imagens utilizadas na página `/home`, adequando-os à nova estrutura do diretório `/public`.
- Criação do arquivo `index.css` para estilização específica do formulário de login.
- Atualização dos botões **"Assistir"** presentes nos cards de filmes:
  - Configuração dos links para direcionar o usuário à rota `/watch/:movieID`.
  - Envio do identificador correspondente ao filme selecionado.
- Adequação das páginas HTML para utilização dos templates EJS.
- Manutenção dos scripts de filtragem de filmes no lado do cliente.

---

## 11. Próximas implementações

- [ ] Implementar a integração com os gêneros de filmes da API TMDB.
- [ ] Implementar consultas adicionais à API, incluindo filtros e parâmetros de pesquisa.
- [ ] Aprimorar a navegação e a filtragem de filmes.
- [ ] Implementar novas funcionalidades utilizando os dados dinâmicos da API.
- [ ] Revisar e aprimorar o tratamento de erros das requisições.
- [ ] Verificar a consistência da integração entre Back-end, API e templates EJS.

---

**Status da etapa:** Em desenvolvimento.

**Objetivo geral:** Estruturar o Back-end da aplicação utilizando Node.js e Express, implementar o sistema de rotas HTTP, integrar a API TMDB por meio do Axios e preparar os templates EJS para renderização dinâmica dos conteúdos.