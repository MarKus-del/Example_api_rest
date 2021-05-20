# Example Api Rest

Este repositório contém o material de estudo sobre api rest feito no [curso de javascript e typescript](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) do instrutor [Luiz Otavio Mirando](https://www.udemy.com/user/luiz-otavio-miranda/) na Udemy.

Este projeto foi feita uma APi rest para gerenciar alunos usando o banco de dados relacional MariaDB e autenticação com JWT.

## Principais Bibliotecas Utilizadas:
  + Express
  + Sequelize
  + Json Web Token
  + Bcrypts

## Como rodar ?

1. Primeiro baixe o projeto com o git:
```bash
  git clone https://github.com/MarKus-del/Example_api_rest
```

2. Para rodar a aplicação primeiro é preciso conter um banco de dados relacional MariaDB com um database com nome escola, se você possui o docker rode o seguinte comando no terminal:
```bash
  docker compose up
```

3. Após ter o banco de dados rodando seja no seu computador ou em um container crie um arquivo .env dentro da pasta do projeto com as seguintes variaveis:

```.env
DATABASE=escola
DATABASE_HOST=<localhost>
DATABASE_POST=<Porta do seu banco de dados>
DATABASE_USERNAME=<o nome do seu usuario no banco>
DATABASE_PASSWORD=<seja de seu usuario no banco>

TOKEN_SECRET=<Uma sequencia de caracteres para validar seus token>

// use 7d para tester
TOKEN_EXPIRATION=<Quantidade de tempo que seu vai expirar>

// coloque http://localhost para testar
APP_URL=<A url da sua aplicação>

// coloque a porta 3000 para testar
APP_PORT=<Porta da sua aplicação>
```

Obs: se você estiver usando outro banco de dados relacional use a documentação do [Sequelize](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database) para realizar sua conexão

4. Baixe as dependências do projeto utilizando o seguinte comando no terminal dentro da pasta do projeto


```bash
# NPM como gerenciador de pacotes
npm install
```

5. Rode as migrações e seed com os seguintes comandos:

```bash
# Rodando as migrações
npx sequelize db:migrate

# Rodando as seeds
npx sequelize db:seed:all
```

6. Rode a aplicação com o seguinte comando
```bash
npm run dev
```
