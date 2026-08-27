# Proposta e Especificação do Projeto: VoidTV

## 1. Nome da Aplicação
VoidTV

## 2. Descrição do Problema
- Entusiastas de cinema independente, underground e de nicho frequentemente enfrentam dificuldades para encontrar obras fora do circuito comercial mainstream de maneira organizada. As plataformas tradicionais priorizam grandes produções, deixando catálogos especializados dispersos em múltiplos serviços ou indisponíveis. A VoidTV resolve essa fragmentação ao centralizar a catalogação, reprodução e interação da comunidade em torno de conteúdos audiovisuais de nicho em uma interface web acessível.

## 3. Público-Alvo
- Fãs e pesquisadores de cinema independente, cult e underground.
- Estudantes e entusiastas de audiovisual.
- Usuários que buscam uma experiência simplificada de streaming e curadoria de filmes.

## 4. Objetivo Principal
- Desenvolver uma aplicação Web para transmissão de conteúdo audiovisual (streaming) que permita aos usuários navegar por um catálogo curado, assistir a vídeos via player integrado, gerenciar listas personalizadas e publicar avaliações sobre as obras.

## 5. Funcionalidades da Aplicação
1. **Autenticação e Perfil de Usuário:** Cadastro, login e gestão de perfil simples.
2. **Catálogo e Busca:** Navegação por categorias/gêneros e busca textual por títulos.
3. **Player de Streaming Integrado:** Reprodução de vídeo em tela com controles de reprodução (play, pause, volume, tela cheia).
4. **Gerenciamento de Favoritos (Minha Lista):** Opção para o usuário salvar e remover filmes da sua lista pessoal.
5. **Avaliações e Comentários:** Sistema para envio de notas e resenhas sobre cada filme.

## 6. Entidades do Domínio
- **Usuário (`Usuario`):** Identificador (`id`), nome, e-mail, hash da senha, tipo de perfil (comum ou administrador) e data de criação.
- **Filme (`Filme`):** Identificador (`id`), título, sinopse, ano de lançamento, duração, gênero/categoria, URL do vídeo, URL da imagem de capa (thumbnail).
- **Avaliação (`Avaliacao`):** Identificador (`id`), referência ao usuário (`usuario_id`), referência ao filme (`filme_id`), nota (1 a 5), comentário e data.

## 7. Descrição das Telas / Interfaces
1. **Tela Principal (Home / Catálogo):** Apresenta o banner em destaque e carrosséis/grades organizadas por categorias de filmes, com barra de pesquisa no topo.
2. **Tela de Detalhes e Player do Filme:** Exibe a sinopse completa, informações técnicas, o player HTML5 para execução do streaming e a seção inferior de avaliações dos usuários.
3. **Tela do Perfil e Minha Lista:** Exibe os dados cadastrais do usuário e a lista de filmes salvos como favoritos para acesso rápido.

## 8. Operações da Aplicação
1. **Cadastrar/Autenticar Usuário:** Registro e verificação de credenciais de acesso.
2. **Consultar Filmes:** Listagem geral e filtragem de títulos por categoria ou nome.
3. **Adicionar/Remover Favorito:** Associação ou desassociação entre um filme e a lista pessoal do usuário.
4. **Publicar Avaliação:** Inserção de nota e comentário em um filme específico.
5. **Cadastrar/Remover Filme (Gestão do Catálogo):** Inserção e remoção de títulos no sistema por administradores.

## 9. Arquitetura e Tecnologias
- **Cliente (Front-end):** HTML5, CSS3, JavaScript (React / Vanilla JS).
- **Servidor (Back-end):** Node.js com Express.
- **Persistência (Banco de Dados):** SQLite / PostgreSQL.

## 10. Visão Geral da Solução

```text
+-------------------------------------------------------------+
|                      CLIENTE (Navegador)                     |
|  [ Interface Web / HTML5 / CSS / JavaScript / Player Video ] |
+------------------------------+------------------------------+
                               |
                               | Requisições HTTP (REST API)
                               v
+-------------------------------------------------------------+
|                     SERVIDOR (Node.js / Express)             |
|  [ Rotas API | Autenticação | Regras de Negócio / Streaming]|
+------------------------------+------------------------------+
                               |
                               | Leitura / Escrita
                               v
+-------------------------------------------------------------+
|                   BANCO DE DADOS (SQLite/PostgreSQL)         |
|  [ Tabelas: Usuarios | Filmes | Avaliacoes | Favoritos ]    |
+-------------------------------------------------------------+
```