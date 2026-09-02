# VoidTV — Plataforma de Streaming de Filmes Web

## Descrição da Aplicação

- O **VoidTV** é uma aplicação Web de streaming de filmes desenvolvida com o objetivo de centralizar e facilitar o acesso a obras audiovisuais de diferentes gêneros.
- Atualmente, a aplicação possui uma interface estruturada em **HTML5**, permitindo a navegação entre páginas, visualização de catálogos de filmes e reprodução de vídeos diretamente no navegador.
- O projeto foi estruturado de forma a servir como base para a implementação futura de funcionalidades dinâmicas, como filtros, pesquisa, favoritos, avaliações e resenhas.

## Problema Resolvido

- A necessidade de uma plataforma organizada para apresentação e acesso a diferentes filmes, reunindo informações como pôsteres, títulos, sinopses, ano de lançamento, duração e gêneros em uma única interface.
- O projeto também estabelece uma estrutura que poderá ser expandida futuramente para oferecer recursos de interação e personalização para os usuários.

## Tecnologias Utilizadas

- **Estrutura:** HTML5.
- **Controle de Versão:** Git / GitHub.
- **Vídeo:** elemento `<video>` nativo do HTML5 para reprodução de arquivos no formato MP4.
- **Recursos externos:** imagens de pôsteres hospedadas pelo TMDB e links externos para informações de filmes.

> **Observação:** CSS3, Bootstrap, JavaScript, Node.js, Express e banco de dados ainda não fazem parte da implementação atual.

## Instruções de Execução

- O projeto pode ser executado diretamente em um navegador Web.
- Para visualizar a aplicação, basta abrir o arquivo `index.html`.
- A navegação entre as páginas é realizada por meio de links HTML utilizando caminhos relativos.
- Para utilizar o player, é necessário que o arquivo de vídeo esteja disponível no diretório definido pelo projeto.

## Funcionalidades Implementadas

- [x] Especificação e modelagem inicial do projeto.
- [x] Criação da página inicial (`index.html`).
- [x] Criação da página de gêneros (`genres.html`).
- [x] Criação da página do player (`player.html`).
- [x] Navegação entre as páginas por meio de links HTML.
- [x] Exibição de filmes em catálogo.
- [x] Exibição de pôsteres, títulos e informações dos filmes.
- [x] Exibição de sinopses, ano de lançamento e duração.
- [x] Organização de filmes por gênero.
- [x] Implementação de seleção de gênero utilizando `input type="radio"`.
- [x] Implementação de player de vídeo utilizando HTML5.
- [x] Reprodução de arquivo de vídeo local no formato MP4.
- [x] Utilização de imagem de pôster como `poster` do elemento `<video>`.
- [x] Criação de formulário de pesquisa.
- [x] Criação de área de usuário com avatar e opções de perfil.
- [x] Estruturação semântica das páginas utilizando elementos HTML5 como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>`.
- [x] Utilização de atributos `alt` nas imagens para melhorar a acessibilidade.
- [x] Utilização de `<label>` associado aos campos de formulário.

## Páginas Criadas

### `index.html`

- Página principal da aplicação.
- Contém o cabeçalho e menu de navegação.
- Possui campo de pesquisa.
- Apresenta uma seção de filmes em destaque.
- Apresenta um catálogo de filmes.
- Exibe pôster, título, ano e ações disponíveis para cada filme.
- Possui área de usuário e rodapé.

### `public/genres.html`

- Página destinada à navegação por gêneros.
- Possui opções de gênero:
  - Horror;
  - Thriller;
  - Action.
- Apresenta uma lista de filmes com pôster, título, sinopse, ano e duração.
- Disponibiliza links para acesso ao player.

### `public/player.html`

- Página destinada à reprodução de filmes.
- Possui player baseado no elemento `<video>` do HTML5.
- Utiliza um arquivo de vídeo local (`kill-bill-trailer.mp4`).
- Apresenta informações detalhadas sobre o filme.
- Possui título, sinopse, duração, gêneros, direção, lançamento, avaliação e idioma.
- Possui ações como "Assistir Agora", "Lista de Desejos" e "Compartilhar".

## Decisões Relacionadas à Estrutura HTML

- Foi adotado **HTML5** como tecnologia principal para a primeira etapa de implementação.
- Foram utilizados elementos semânticos para representar as diferentes partes da aplicação.
- O elemento `<header>` foi utilizado para estruturar o cabeçalho e a navegação principal.
- O elemento `<nav>` foi utilizado para representar os links de navegação entre as páginas.
- O elemento `<main>` foi utilizado para delimitar o conteúdo principal de cada página.
- O elemento `<section>` foi utilizado para dividir o conteúdo em áreas relacionadas.
- O elemento `<article>` foi utilizado para representar cada filme individualmente no catálogo.
- O elemento `<aside>` foi utilizado na página do player para apresentar informações complementares sobre o filme.
- Os elementos `<dl>`, `<dt>` e `<dd>` foram utilizados para estruturar informações detalhadas do filme.
- O elemento `<form>` foi utilizado para estruturar a funcionalidade de pesquisa.
- Os elementos `<label>` e `<input>` foram utilizados para estruturar os campos de formulário.
- O elemento `<video>` foi escolhido para utilizar o recurso nativo de reprodução de vídeos disponibilizado pelo HTML5.
- Os caminhos relativos foram utilizados para permitir a navegação entre os documentos dentro da estrutura de diretórios do projeto.
- Os atributos `alt` foram adicionados às imagens para fornecer descrições alternativas e melhorar a acessibilidade.
- A estrutura foi desenvolvida de forma modular, permitindo a implementação posterior de CSS, JavaScript e outras tecnologias sem a necessidade de reconstruir a estrutura básica das páginas.

## Limitações Conhecidas

- A aplicação encontra-se em uma etapa inicial de implementação.
- A interface ainda não possui CSS ou Bootstrap implementados.
- A pesquisa está estruturada em HTML, mas ainda não realiza buscas.
- A seleção de gênero está estruturada, mas ainda não realiza filtragem dinâmica dos filmes.
- Os botões e links de algumas funcionalidades ainda utilizam `#` e não possuem comportamento implementado.
- O sistema de favoritos/Lista de Desejos ainda não possui funcionalidade.
- O sistema de avaliações e resenhas ainda não possui funcionalidade.
- O sistema de usuários ainda não possui autenticação ou gerenciamento de contas.
- O catálogo ainda não possui integração com banco de dados.
- A reprodução de vídeos atualmente utiliza um arquivo local específico.
- Não há, até o momento, implementação de back-end ou API própria.

## Estrutura do Projeto

```text
VoidTV/ (src)
├── index.html
│
├── public/
│   ├── genres.html
│   └── player.html
│
└── src/
    ├── img/
    │   └── Imagens do Projeto
    │
    └── video/
        └── Vídeos do projeto
