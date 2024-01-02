<h1 align="center">
  Client Agender - API
</h1>

<p align = "center">
Este é o backend da aplicação ClientAgender - Um agenda web para seus contatos! O objetivo dessa aplicação é demonstrar conhecimento em tecnologias backend, organização de código e fornecer dados para criação de interfaces.
</p>

##  Visão Geral

Um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---
<p>Para utilização desta API você precisa seguir os seguintes passos:</p>

<ol>
  <li>
    Clone este repositório em sua máquina;
  </li> 
  <li>
    Acesse o repositório clonado através de um terminal, digite o seguinte comando no terminal <code>npm install</code>, isso fará com que todas as dependências do projeto sejam instaladas;
  </li>
  <li>
    Na raiz do repositório crie um arquivo <code>.env</code> e o configure  suas variáveis de ambiente com suas credenciais do Postgres e uma nova database de acordo com o <code>.env.example</code>;
  </li>
  <li>
    Gere as migrations com o comando:

  ```
  npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
  ```
  </li>
  <li>
    Execute as migrations com o comando:

  ```
  npm run typeorm migration:run -- -d ./src/data-source
  ```
  </li>
  <li>
    Digite o comando <code>npm run dev</code>, isso colocará a API em funcionamento 
  </li>
  <li>
    Utilize a API normalmente
  </li>
</ol>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>


A API tem um total de 11 endpoints, sendo para Cliente cadastrar seu perfil e seus contatos. <br/>

A url base da API é http://localhost:3000/

Caso esteja usando o Insomnia importe o arquivo <code>Insomnia_eltonferrs</code> para testar as rotas

## Rotas que não precisam de autenticação


<h2 align ='center'> Criação de Cliente </h2>

`POST /clients - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "teste",
  "email": "teste@mail.com",
  "password": "1234",
  "cellphone": "40028922"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "a3f3e72b-b0cb-482e-91bd-8d3ecddf8aae",
	"name": "teste",
	"email": "teste@mail.com",
	"cellphone": "40028922",
	"started": "2023-11-24"
}
```

<h2 align ='center'> Listagem de Clientes Cadastrados </h2>

O usuário sem fazer login ou se cadastrar pode ver os clients já cadastrados na plataforma, na API podemos acessar a lista dessa forma:

`GET /clients - FORMATO DA RESPOSTA - STATUS 200`

```json
[
    {
		"id": "310951a7-31b6-43d3-843d-25467333a8fe",
		"name": "teste1",
		"email": "teste1@mail.com",
		"cellphone": "40028922",
		"started": "2023-11-24"
	},
	{
		"id": "ad6698bd-8c34-4b0c-88e5-e22c94318c8b",
		"name": "teste2",
		"email": "teste2@mail.com",
		"cellphone": "40028922",
		"started": "2023-11-24"
	}
]
```

<h2 align = "center"> Login </h2>

`POST /clients/login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "teste@email.com",
  "password": "1234"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /clients/login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEzNjkxMzYsImV4cCI6MTcwMTM3MjczNiwic3ViIjoiYWQ2Njk4YmQtOGMzNC00YjBjLTg4ZTUtZTIyYzk0MzE4YzhiIn0.bS2wxiOTvDmYamJfBLEL4eDXfcVAfVpVq1YWE2U9zig"
}
```


## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

<h2 align ='center'> Consultar Informações do cliente logado </h2>

`GET /clients/detail - FORMATO DA RESPOSTA`

```json
{
	"id": "ad6698bd-8c34-4b0c-88e5-e22c94318c8b",
	"name": "teste",
	"email": "teste@mail.com",
	"cellphone": "40028922",
	"started": "2023-11-24"
}
```

<h2 align ='center'> Atualizar Informações do cliente </h2>

`PATCH /clients/:id - FORMATO DA REQUISIÇÃO`

Não énescessário passar todos os campos somente os que deseja atualizar(exceto "id" e "started"):
```json
{
  "name": "testeName"
}
```
Caso dê tudo certo, a resposta será assim:

`PACTH /clients/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "a3f3e72b-b0cb-482e-91bd-8d3ecddf8aae",
	"name": "testeName",
	"email": "teste@mail.com",
	"cellphone": "81597573",
	"started": "2023-11-24"
}
```

Também é possível deletar o cliente caso ele esteja logado, utilizando este endpoint:

`DELETE /clients/:id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criação de Contato </h2>

Um cliente Logado será capaz de criar seus contatos

`POST /contact - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "contato",
  "email": "contato@mail.com",
  "cellphone": "40028922"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /contact - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "b0c1914e-4c57-482f-bb14-b870981afab2",
  "name": "contato",
  "email": "contato@mail.com",
  "cellphone": "40028922",
  "registered": "2023-11-24",
  "client": {
  	"id": "310951a7-31b6-43d3-843d-25467333a8fe"
	}
}
```

<h2 align ='center'> Listagem de Contatos Cadastrados </h2>

O cliente poderá ver todos os contatos cadastrados por ele:

`GET /contact - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "b62d51a9-4ef9-4c7d-af5a-adaaa0e2ae69",
		"name": "contato",
		"email": "contato@mail.com",
		"cellphone": "40028922",
		"registered": "2023-11-24"
	},
	{
		"id": "5c6715bc-4729-4017-9cab-2f51347aaba4",
		"name": "contato2",
		"email": "contato2@mail.com",
		"cellphone": "81597573",
		"registered": "2023-11-24"
	}
]
```
<h2 align ='center'> Consultar único contato </h2>

O cliente poderá ver dados do contato caso este tenha sido cadastrado por ele: 

`GET /contact/:contactId - FORMATO DA RESPOSTA`

```json
[
	{
		"id": "5c6715bc-4729-4017-9cab-2f51347aaba4",
		"name": "contato",
		"email": "contato@mail.com",
		"cellphone": "81597573",
		"registered": "2023-11-24"
	}
]
```
<h2 align ='center'> Atualizar Informações de Contato </h2>

`PATCH /clients/:id - FORMATO DA REQUISIÇÃO`

Não é nescessário passar todos os campos somente os que deseja atualizar(exceto "id", "registered" e "client"):
```json
{
  "name": "ContatoName"
}
```
Caso dê tudo certo, a resposta será assim:

`PACTH /contact/:contactId - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "71c8bbe5-42ee-403e-bf39-02621c90d98e",
	"name": "ContatoName",
	"email": "contato@mail.com",
	"cellphone": "40028922",
	"registered": "2023-11-30",
	"client": {
		"id": "ad6698bd-8c34-4b0c-88e5-e22c94318c8b"
	}
}
```

Também é possível deletar o contato, utilizando este endpoint:

`DELETE /contact/:contactId`

```
Não é necessário um corpo da requisição.
```
