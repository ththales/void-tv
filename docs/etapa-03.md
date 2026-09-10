# Etapa 03 — Responsividade

## Interfaces apresentadas

Foram desenvolvidas três interfaces principais na aplicação:

* **Página inicial (`index.html`)**

  * Exibe um carousel de filmes em destaque.
  * Apresenta os filmes organizados em cards.
  * O carousel é ocultado em telas menores para melhorar a visualização em dispositivos móveis.
  * Os cards possuem imagens adaptadas para telas pequenas.

* **Página de gêneros (`genres.html`)**

  * Apresenta uma lista de gêneros.
  * Exibe os filmes em cards organizados em uma grade responsiva.
  * A quantidade de cards por linha é adaptada de acordo com a largura da tela.

* **Página do player (`player.html`)**

  * Apresenta o player de vídeo.
  * Exibe informações sobre o filme, como título, descrição, gênero e duração.
  * Possui uma seção lateral com detalhes do filme.

## Viewports utilizados nas evidências

As evidências da responsividade devem apresentar a aplicação em três tamanhos de tela:

| Tamanho |           Viewport | Representação      |
| ------- | -----------------: | ------------------ |
| Desktop | **1920 × 1080 px** | Tela grande        |
| Tablet  |  **768 × 1024 px** | Tela intermediária |
| Mobile  |   **375 × 667 px** | Tela pequena       |

Esses três viewports permitem verificar o comportamento da aplicação em diferentes larguras de tela, principalmente as mudanças realizadas por meio das media queries.

## Breakpoints utilizados

Foram utilizados os seguintes breakpoints:

### Breakpoint de 768 px

```css
@media (max-width: 768px) {
    #carouselExample {
        display: none;
    }
}
```

Na página inicial, quando a largura da viewport é igual ou inferior a **768 px**, o carousel de filmes em destaque é ocultado.

Essa decisão evita que uma área muito grande da interface ocupe espaço em telas menores, permitindo que o usuário tenha acesso mais rápido ao conteúdo principal.

### Breakpoint de 500 px

Nas páginas `index.html` e `genres.html`, foi utilizado um breakpoint de **500 px** para adaptar as imagens dos cards:

```css
@media (max-width: 500px) {
    .card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: top;
        display: block;
        align-self: center;
    }
}
```

Em telas de até 500 px de largura, a altura das imagens dos cards é reduzida de **400 px para 150 px**, evitando que os cards ocupem uma quantidade excessiva de espaço vertical.

## Principais decisões de responsividade

### Página inicial

A página inicial utiliza o sistema de grid responsivo do Bootstrap para organizar os cards:

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
```

Dessa forma, a quantidade de cards por linha é adaptada conforme a largura da viewport:

* **Telas pequenas:** 1 card por linha;
* **Telas a partir de 576 px:** 2 cards por linha;
* **Telas a partir de 768 px:** 3 cards por linha.

O carousel possui imagens com largura de `100%` e altura de `400px`, utilizando `object-fit: cover` para manter o preenchimento da área disponível.

Além disso, o carousel é ocultado em telas de até **768 px**:

```css
@media (max-width: 768px) {
    #carouselExample {
        display: none;
    }
}
```

Em telas de até **500 px**, as imagens dos cards passam a ter apenas `150px` de altura.

### Página de gêneros

A página de gêneros utiliza um grid ainda mais adaptável:

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
```

A quantidade de cards por linha varia conforme a largura da tela:

* **Telas pequenas:** 1 card por linha;
* **A partir de 576 px:** 2 cards por linha;
* **A partir de 768 px:** 3 cards por linha;
* **A partir de 992 px:** 5 cards por linha.

As imagens dos cards possuem inicialmente `400px` de altura:

```css
.card img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
}
```

Em telas de até **500 px**, a altura é reduzida para `150px`, tornando os cards mais compactos:

```css
@media (max-width: 500px) {
    .card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: top;
        display: block;
        align-self: center;
    }
}
```

### Página do player

A página do player utiliza componentes responsivos do Bootstrap, principalmente o componente:

```html
<div class="ratio ratio-16x9">
```

Esse componente mantém a proporção **16:9** do vídeo enquanto a largura disponível da tela é alterada.

O conteúdo abaixo do player também utiliza o grid responsivo:

```html
<div class="row g-4">
    <div class="col-lg-8">
        ...
    </div>

    <aside class="col-lg-4">
        ...
    </aside>
</div>
```

Em telas grandes, o conteúdo principal ocupa aproximadamente dois terços da largura e a seção de detalhes ocupa aproximadamente um terço.

Em telas menores, o comportamento responsivo do Bootstrap faz com que as colunas sejam reorganizadas verticalmente.

## Arquivos CSS responsáveis pela responsividade

A responsividade da aplicação é distribuída entre os arquivos CSS específicos de cada página:

```text
styles/
├── style.css
├── home.css
├── genres.css
└── player.css
```

### `styles/home.css`

Responsável pelas regras específicas de responsividade da página inicial (`index.html`), incluindo:

* dimensões das imagens do carousel;
* posicionamento das imagens;
* ocultação do carousel em telas de até 768 px;
* redução das imagens dos cards em telas de até 500 px.

O arquivo é carregado pela página inicial através de:

```html
<link rel="stylesheet" href="./styles/home.css">
```

A página também utiliza o `style.css` como folha de estilos geral.

### `styles/genres.css`

Responsável pelas regras específicas da página de gêneros (`genres.html`), incluindo:

* comportamento dos cards;
* dimensões das imagens;
* organização interna dos cards;
* adaptação das imagens para telas de até 500 px;
* espaçamento e comportamento dos elementos da página.

O arquivo é carregado através de:

```html
<link rel="stylesheet" href="../styles/genres.css">
```

A própria estrutura da página utiliza classes responsivas do Bootstrap, como `row-cols-sm-2`, `row-cols-md-3` e `row-cols-lg-5`.

### `styles/player.css`

Responsável pelos estilos específicos do player, incluindo a aparência do elemento de vídeo e dos botões.

O player também utiliza recursos responsivos fornecidos pelo Bootstrap, como `ratio ratio-16x9` e as classes de grid `col-lg-8` e `col-lg-4`.

## Evidências de responsividade

As evidências devem permitir comparar visualmente as três situações abaixo:

### 1. Desktop — 1920 × 1080 px

Nesta resolução deve ser possível verificar:

* carousel visível na página inicial;
* três cards por linha na página inicial;
* cinco cards por linha na página de gêneros;
* player ocupando uma área ampla;
* informações do filme organizadas lado a lado com a seção de detalhes.

**Evidência:** captura de tela da aplicação utilizando viewport de **1920 × 1080 px**.

### 2. Tablet — 768 × 1024 px

Nesta resolução deve ser possível verificar:

* aplicação do breakpoint de `768px`;
* carousel da página inicial ocultado;
* reorganização dos cards;
* adaptação do conteúdo para uma área horizontal menor;
* comportamento responsivo do player e das informações do filme.

**Evidência:** captura de tela da aplicação utilizando viewport de **768 × 1024 px**.

### 3. Mobile — 375 × 667 px

Nesta resolução deve ser possível verificar:

* carousel ocultado;
* cards ocupando uma coluna;
* imagens dos cards reduzidas para `150px` de altura;
* conteúdo reorganizado verticalmente;
* player mantendo a proporção 16:9;
* informações e detalhes do filme adaptados à largura reduzida.

**Evidência:** captura de tela da aplicação utilizando viewport de **375 × 667 px**.

## Resumo dos breakpoints

| Breakpoint   | Alteração                                                        |
| ------------ | ---------------------------------------------------------------- |
| **≤ 768 px** | Carousel da página inicial é ocultado.                           |
| **≤ 500 px** | Imagens dos cards são reduzidas para `150px` de altura.          |
| **< 576 px** | Bootstrap utiliza 1 coluna nos grids responsivos.                |
| **≥ 576 px** | Bootstrap utiliza 2 colunas quando definido por `row-cols-sm-2`. |
| **≥ 768 px** | Bootstrap utiliza 3 colunas quando definido por `row-cols-md-3`. |
| **≥ 992 px** | A página de gêneros utiliza 5 colunas com `row-cols-lg-5`.       |

## Conclusão

A aplicação utiliza uma combinação de **CSS próprio, media queries e classes responsivas do Bootstrap** para adaptar suas interfaces a diferentes tamanhos de tela.

As principais adaptações são a ocultação do carousel em telas menores, a redução das imagens dos cards no mobile, a reorganização dos cards por meio do sistema de grid do Bootstrap e a manutenção da proporção 16:9 do player de vídeo.

As evidências nos viewports de **1920 × 1080 px**, **768 × 1024 px** e **375 × 667 px** permitem verificar visualmente essas mudanças e demonstrar o comportamento responsivo das três interfaces.
