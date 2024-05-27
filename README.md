# SEVN NEWS

Projeto referente ao um website de noticias.

- [SEVN NEWS](#CLIMAGRO)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [Client](#client)
    - [Server](#server)

## Tecnologias

Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [Node](https://nodejs.org/en/);
- [React](https://pt-br.reactjs.org/);
- [TypeScript](https://www.typescriptlang.org/);
- [React-Router-dom](https://reactrouter.com/en/main);
- [Styled-components](https://styled-components.com/);
- [Typeorm](https://typeorm.io/);
- [Express](https://expressjs.com/pt-br/);


## Inicializando

### Banco de dados:

O banco de dados como não era necessário no momento, foi utilizado um arquivo json como tal.

### Server:

A nossa Server foi construida utilizando o Node.js utilizando Express e TypeScript, e o TypeORM. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e excutamos o seguinte comando no terminal:

```bash
$ cd server
$ npm install
```

agora, podemos estar inicializando com através do comando:

```bash
$ npm run dev
```

### Iniciando o Front-end:

O nosso front-end foi inciado utilizando vite com o uso de React + Typescript e styled-components para criação dos componentes.

Para iniciar o nosso front-end o primeiro passo é acessar a nossa pasta client: 

```bash
$ cd client
```

Em seguida já podemos inicializar o projeto:

```bash
$ npm run dev
```

### Executando a aplicação

Agora com a aplicação configurada é possível acessar a mesma através da seguinte URL:

Front-end
- http://localhost:5173/

Back-end
- http://localhost:3000/

Banco de dados
- http://localhost:5432/

