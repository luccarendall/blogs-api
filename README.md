<strong> Este projeto é uma API RESTful para uma plataforma de blogs. Ele permite a criação, leitura, atualização e exclusão de posts de blog. Além disso, oferece recursos para registro e autenticação de usuários, bem como a adição de comentários aos posts. <strong>

<div align="center">
<img src="https://i.ibb.co/gJN1st9/Lucca-Rendall.png" alt="Lucca-Rendall">  
</div>

## Recursos

- Gerenciamento de posts de blog:
  - Criar um novo post
  - Ler detalhes de um post específico
  - Atualizar um post existente
  - Excluir um post
- Registro e autenticação de usuários:
  - Registrar um novo usuário
  - Autenticar um usuário existente
- Adicionar comentários aos posts de blog
- Listagem de posts:
  - Obter uma lista de todos os posts
  - Filtrar posts por autor
  - Ordenar posts por data
- Pesquisa de posts:
  - Pesquisar posts por título ou conteúdo
- Tratamento de erros adequado e validação de dados

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize
- Nodemon
- Docker

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js
- Docker

## Instalação

Siga as etapas abaixo para configurar e executar a aplicação:

1. Clone o repositório:

```
git clone https://github.com/luccarendall/blogs-api.git
```
2. Navegue até o diretório do projeto:
```
cd blogs-api
```

3. Instale as dependências:
```
npm install
```

4. Configure as variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.  
- Edite o arquivo .env e defina os valores adequados para as variáveis de ambiente.

5. Inicie o servidor:
```
npm start
```
A aplicação agora está em execução e pode ser acessada através do seguinte endpoint: http://localhost:3000.

A API possui os seguintes endpoints:

GET /posts: Obter a lista de todos os posts de blog.  
GET /posts/:id: Obter detalhes de um post específico.  
POST /posts: Criar um novo post.  
PUT /posts/:id: Atualizar um post existente.  
DELETE /posts/:id: Excluir um post.  
POST /users/register: Registrar um novo usuário.  
POST /users/login: Autenticar um usuário.  
POST /posts/:id/comments: Adicionar um comentário a um post.  
GET /users/:id/posts: Obter todos os posts de um usuário específico.  
GET /search/posts: Pesquisar posts por título ou conteúdo.  

Contribuições
Contribuições são bem-vindas! Para contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature:
```git checkout -b minha-feature```
3. Faça as alterações necessárias e commit:
```git commit -m "Minha contribuição"```
4. Faça o push para o repositório remoto:
```git push origin minha-feature```
