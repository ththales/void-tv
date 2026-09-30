# ETAPA 04 — INTERATIVIDADE COM JAVASCRIPT

## 1. Identificação

**Projeto:** VoidTV  
**Etapa:** 04 — Interatividade com JavaScript  
**Tag da versão:** `etapa-04`

---

## 2. Objetivo

A Etapa 04 tem como objetivo adicionar comportamento dinâmico e interatividade à aplicação por meio de JavaScript e jQuery.

Nesta etapa foram implementadas funcionalidades de manipulação do DOM, filtragem e pesquisa de filmes, validação de formulário, geração dinâmica de conteúdo e melhorias na interação com o player de vídeo.

---

# 3. Funcionalidades implementadas

## 3.1. Manipulação dinâmica dos cards de filmes

Foi implementada a geração dinâmica dos cards de filmes utilizando JavaScript.

Os cards são criados a partir dos dados dos filmes e inseridos dinamicamente na interface da aplicação.

A funcionalidade foi implementada nas páginas:

- `/public/home`
- `/public/genres`

### Funcionalidades envolvidas

- Criação dinâmica dos elementos dos cards;
- Inserção dos dados dos filmes;
- Exibição de título, descrição e demais informações;
- Atualização do conteúdo exibido na página.

### Conceitos utilizados

- Manipulação do DOM;
- Arrays;
- Objetos;
- Funções;
- Métodos de iteração;
- Estruturas condicionais.

---

# 4. Pesquisa de filmes

Foi implementado um sistema global de pesquisa de filmes por título.

O usuário pode utilizar a caixa de pesquisa para procurar filmes pelo nome. A pesquisa funciona nas páginas que apresentam o catálogo de filmes.

A interface é atualizada dinamicamente de acordo com o resultado da pesquisa.

### Funcionamento

1. O usuário digita o título ou parte do título do filme.
2. O JavaScript captura o valor informado.
3. Os filmes são percorridos para localizar correspondências.
4. Os resultados encontrados são exibidos dinamicamente.
5. Filmes que não correspondem à pesquisa deixam de ser exibidos.

### Conceitos utilizados

- Manipulação do DOM;
- Eventos;
- Arrays;
- Métodos de iteração;
- Funções;
- Pesquisa em estruturas de dados;
- Alteração dinâmica da interface.

### Situações inválidas tratadas

- Pesquisa sem correspondência com nenhum filme;
- Pesquisa com entrada vazia, quando aplicável.

---

# 5. Filtragem de filmes por gênero

Foi implementado um sistema de filtragem de filmes por gênero na página:

```text
/public/genres
```

Foram adicionados gêneros para permitir que o usuário filtre o catálogo de filmes.

### Funcionamento

1. O usuário seleciona um gênero.
2. O JavaScript identifica o gênero selecionado.
3. Os filmes disponíveis são percorridos.
4. Apenas os filmes pertencentes ao gênero selecionado são mantidos nos resultados.
5. Os cards exibidos na página são atualizados dinamicamente.

### Conceitos utilizados

- Arrays;
- Métodos de iteração;
- Funções;
- Manipulação do DOM;
- Eventos;
- Estruturas condicionais;
- Filtragem de dados.

---

# 6. Limitação das descrições dos filmes

Foi implementada uma limitação na quantidade de caracteres exibidos nas descrições dos filmes.

Essa funcionalidade evita que descrições muito extensas ocupem espaço excessivo nos cards.

Quando uma descrição ultrapassa o limite definido, seu conteúdo é reduzido para manter a organização visual da interface.

### Conceitos utilizados

- Manipulação de strings;
- Condicionais;
- Funções;
- Alteração dinâmica do conteúdo.

---

# 7. Validação do formulário de Login

A página inicial da aplicação foi alterada para funcionar como uma página de Login.

A validação do formulário foi implementada utilizando JavaScript no arquivo:

```text
/index.js
```

A validação é executada quando o usuário tenta enviar o formulário.

## 7.1. Validações implementadas

### Campos obrigatórios

Os campos de e-mail e senha não podem permanecer vazios.

Caso algum dos campos não seja preenchido, o envio do formulário é interrompido e uma mensagem de erro é apresentada ao usuário.

### Validação do e-mail

O endereço informado deve possuir um formato válido de e-mail.

Caso o valor informado não corresponda a um endereço de e-mail válido, o envio do formulário é impedido.

### Validação da senha

A senha deve possuir pelo menos 6 caracteres.

Caso a senha possua menos de 6 caracteres, o envio do formulário é impedido e uma mensagem de erro é apresentada.

### Conceitos utilizados

- Manipulação do DOM;
- Eventos;
- Evento `submit`;
- Funções;
- Estruturas condicionais;
- Validação de dados;
- Manipulação de strings;
- Tratamento de situações inválidas.

---

# 8. Tratamento de situações inválidas

A aplicação possui tratamento para diferentes entradas inválidas realizadas pelo usuário.

Entre as situações tratadas estão:

- Campo de e-mail vazio;
- Campo de senha vazio;
- E-mail em formato inválido;
- Senha com menos de 6 caracteres;

Quando uma situação inválida é identificada, a aplicação impede ou adapta o comportamento da funcionalidade e apresenta o estado correspondente ao usuário.

---

# 9. Uso do jQuery

Foi adicionada a biblioteca jQuery ao projeto por meio do Google CDN.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

A inclusão da biblioteca permite a utilização de recursos do jQuery durante o desenvolvimento da aplicação.

---

# 10. Melhorias no Player

Na página:

```text
/public/player
```

foram realizadas alterações relacionadas ao player de vídeo.

### Alterações realizadas

- Remoção da caixa de pesquisa da página do player;
- Correção de duplicação do arquivo `player.css`;

Essas alterações tiveram como objetivo manter a página do player focada na reprodução do conteúdo.

---

# 11. Correções de navegação

Foram corrigidos bugs relacionados ao redirecionamento de links da aplicação.

As correções garantem que os links utilizados nas páginas direcionem o usuário para os caminhos correspondentes dentro da estrutura do projeto.

---

# 12. Alterações na página inicial

A antiga página inicial da aplicação foi modificada para funcionar como página de Login.

A estrutura passou a ser:

```text
/
├── index
└── public
    └── home
```

A página iniciaç foi transferida para:

```text
/public/home
```

Dessa forma, o fluxo inicial da aplicação passa a iniciar pela página de Login.

---

# 13. Arquivos envolvidos

Os principais arquivos envolvidos nas funcionalidades da Etapa 04 incluem:

```text
/
├── index.html
├── index.js
│
├── public/
│   ├── home/
│   ├── genres/
│   └── player/
│
├── scripts/
│   └── arquivos JavaScript relacionados às funcionalidades
│
├── styles/
│   ├── style.css
│   ├── home.css
│   └── player.css
│
└── docs/
    └── etapa-04.md
```

> Os caminhos acima representam a organização utilizada para identificar os arquivos envolvidos nas funcionalidades da etapa. Os nomes específicos dos arquivos JavaScript podem variar de acordo com a organização final do projeto.

---

# 14. Conceitos de programação utilizados

Durante a implementação das funcionalidades foram utilizados diferentes conceitos de programação em JavaScript.

## 14.1. Variáveis

Utilizadas para armazenar informações temporárias, como:

- valores digitados nos campos;
- filmes;
- gêneros;
- resultados de pesquisa;
- elementos do DOM.

## 14.2. Funções

Utilizadas para organizar as funcionalidades e evitar a repetição de código.

Exemplos de responsabilidades:

- gerar cards;
- pesquisar filmes;
- filtrar filmes;
- validar o formulário;
- atualizar a interface.

## 14.3. Arrays

Utilizados para armazenar conjuntos de filmes, gêneros e resultados das operações de pesquisa e filtragem.

## 14.4. Métodos de iteração

Métodos de iteração são utilizados para percorrer os dados dos filmes e realizar operações sobre os elementos.

Entre os métodos utilizados podem estar:

```javascript
forEach()
filter()
map()
```

de acordo com a funcionalidade implementada.

## 14.5. Estruturas condicionais

Utilizadas para verificar situações como:

- campos vazios;
- e-mail inválido;
- senha menor que o tamanho mínimo;
- correspondência de filmes;
- existência de resultados.

## 14.6. Manipulação do DOM

Utilizada para criar, modificar, remover e atualizar elementos da interface dinamicamente.

## 14.7. Eventos

Utilizados para permitir que o JavaScript responda às ações realizadas pelo usuário.

Exemplos:

```javascript
submit
click
input
change
```

---

# 15. Matriz de evidências

| Requisito | Funcionalidade relacionada | Arquivo(s) | Evidência |
|---|---|---|---|
| Manipulação do DOM | Geração dinâmica dos cards | Arquivos JavaScript das páginas Home e Genres | Criação e inserção dinâmica dos elementos dos cards no DOM |
| Tratamento de eventos | Pesquisa, filtros e formulário de Login | Arquivos JavaScript correspondentes | Utilização de eventos para responder às ações do usuário |
| Validação de formulários | Validação do Login | `/index.js` | Verificação de e-mail e senha antes do envio do formulário |
| Alteração dinâmica da interface | Pesquisa e filtragem de filmes | Arquivos JavaScript das páginas de filmes | Atualização dos cards e conteúdo exibido de acordo com a interação do usuário |
| Uso de funções | Pesquisa, filtragem, geração de cards e validação | Arquivos JavaScript correspondentes | Funções responsáveis pela execução das funcionalidades |
| Uso de arrays | Catálogo de filmes e gêneros | Arquivos JavaScript correspondentes | Estruturas utilizadas para armazenar e manipular os dados |
| Métodos de iteração | Geração, pesquisa e filtragem de filmes | Arquivos JavaScript correspondentes | Percorrimento dos arrays utilizando métodos de iteração |
| Tratamento de situações inválidas | Validação do Login e pesquisa | `/index.js` e arquivos de pesquisa | Campos vazios, e-mail inválido, senha curta e ausência de resultados |

---

# 16. Evidências do funcionamento

As funcionalidades implementadas devem ser demonstradas por meio de capturas de tela ou outro registro equivalente.

## 16.1. Login com campos vazios

A captura deve demonstrar o comportamento da aplicação quando o usuário tenta realizar o login sem preencher os campos obrigatórios.

**Resultado esperado:**

```text
Preencha o e-mail e a senha.
```

---

## 16.2. Login com e-mail inválido

A captura deve demonstrar o comportamento da aplicação quando um endereço de e-mail inválido é informado.

**Resultado esperado:**

```text
Digite um endereço de e-mail válido.
```

---

## 16.3. Login com senha curta

A captura deve demonstrar o comportamento da aplicação quando uma senha com menos de 6 caracteres é informada.

**Resultado esperado:**

```text
A senha deve possuir pelo menos 6 caracteres.
```

---

## 16.4. Pesquisa de filmes

A captura deve demonstrar a pesquisa de um filme pelo título e a atualização dos resultados apresentados na interface.

---

## 16.5. Pesquisa sem resultados

A captura deve demonstrar o comportamento da aplicação quando nenhum filme corresponde ao termo pesquisado.

---

## 16.6. Filtragem por gênero

A captura deve demonstrar a seleção de um gênero e a atualização dos filmes exibidos.

---

## 16.7. Geração dinâmica dos cards

A captura deve demonstrar os cards dos filmes gerados dinamicamente pela aplicação.

---

# 17. Instruções para execução

## 17.1. Requisitos

Para executar o projeto, é necessário possuir:

- Git;
- navegador web;
- ambiente de execução utilizado pelo projeto, quando aplicável.

## 17.2. Execução

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

Execute a aplicação utilizando o método de execução configurado no projeto.

Caso a aplicação seja composta por páginas HTML estáticas, a página inicial pode ser aberta através do arquivo:

```text
index.html
```

---

# 18. Instruções para testar as funcionalidades

## Teste 1 — Validação do Login

1. Abra a página inicial.
2. Clique em **Entrar** sem preencher os campos.
3. Verifique a mensagem de validação.
4. Digite um e-mail inválido.
5. Verifique a mensagem apresentada.
6. Digite um e-mail válido e uma senha com menos de 6 caracteres.
7. Verifique a mensagem de senha inválida.
8. Informe um e-mail válido e uma senha com pelo menos 6 caracteres.
9. Verifique o comportamento normal do formulário.

## Teste 2 — Pesquisa de filmes

1. Acesse uma página que apresente filmes.
2. Localize a caixa de pesquisa.
3. Digite o título ou parte do título de um filme.
4. Verifique se os resultados são atualizados.
5. Pesquise por um termo inexistente.
6. Verifique o comportamento apresentado quando não existem resultados.

## Teste 3 — Filtro por gênero

1. Acesse `/public/genres`.
2. Selecione um gênero disponível.
3. Verifique os filmes apresentados.
4. Altere o gênero selecionado.
5. Verifique se a lista de filmes é atualizada.

## Teste 4 — Cards dinâmicos

1. Acesse a Home Page.
2. Verifique os cards apresentados.
3. Acesse a página de gêneros.
4. Verifique a geração dos cards de acordo com os filmes disponíveis e os filtros selecionados.

---

# 19. Resumo dos requisitos atendidos

A implementação da Etapa 04 contempla os seguintes requisitos:

- [x] Manipulação do DOM;
- [x] Tratamento de eventos;
- [x] Validação de formulários;
- [x] Alteração dinâmica da interface;
- [x] Uso de funções;
- [x] Uso de arrays e estruturas equivalentes;
- [x] Uso de métodos de iteração;
- [x] Tratamento de situações inválidas;
- [x] Funcionalidades que dependem de JavaScript;
- [x] Pesquisa de filmes;
- [x] Filtragem de filmes;
- [x] Geração dinâmica de conteúdo;
- [x] Validação do formulário de Login.

---

# 20. Identificação da versão

A versão correspondente à entrega desta etapa deve ser identificada pela tag Git:

```text
etapa-04
```

Essa tag representa a versão do projeto utilizada para avaliação da Etapa 04.