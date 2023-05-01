## Projeto Trybesmith!

## Contexto do projeto:
Foi desenvolvido uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Neste projeto foi realizado operações basicas em um banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, Create, Read, Update e Delete). Foi criado endpoints que vão ler e escrever em um banco de dados, utilizando o MySQL.
- Foi utilizado a linguagem TypeScript
- Foi criado as camadas (Models, Service e Controllers)
- Foi desenvoldido endpoinst (/products, /users, /orders e /login)

## Instalação Local:
Para rodar a aplicação em sua maquina.

1. Clone o repositorio. Use o comando:</br>
  <code>git clone git@github.com:carolhn/Trybesmith.git</code></br>

2. Entre na pasta do repositório que você acabou de clonar:</br>
    `cd Trybesmith.git`

3. Instale as dependências</br>
<code>npm install</code>

4. Comando para executar o app</br>
<code>npm start</code>

## Instalação com Docker:
1. Rode o serviço `node` e `db` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`;
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

2. Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

3. Instale as dependências [**Caso existam**] com `npm install`

4. Execute a aplicação com `npm start` ou `npm run dev`

## Contato:
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-nunes-devfullstack/)
[![Instagran](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/caarolhn/)
[![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/48988037114)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nunescaroline905@gmail.com)



