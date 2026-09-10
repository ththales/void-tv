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
