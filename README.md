# Blogs API

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Blogs API foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end. 

## Objetivo

A aplicação desenvolvida é uma API e um banco de dados com o conteúdo de um blog. A Aplicação deve permitir fazeer operações de criação, leitura, atualização e remoção das informações do blog no banco de dados. Além de realizar as devidas autenticações para conceder permissões aos usuários.

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>
</div>

<br>

Na elaboração da API RESTful utilizou-se a arquitetura **Model-Service-Controller(MSC)**, além das seguintes ferramentas:

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:larissaperinoto/blogs-api.git
    
Navegue até a raíz do projeto.

    cd blogs-api/
    
<details>
   <summary><strong>Rodando local</strong></summary> 
  </br>
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o Node instalado na sua máquina.
  </br>
  </br>
  Instale as dependências com o comando abaixo.
  
    npm install
  
  Faça login no MySQL usando suas credenciais locais.
  
    mysql -r <seu-usuario> -p
  
  Execute o comandos para a criação do banco **BlogsApi** 
  
    npm prestart
    
  Inicie a aplicação com o <strong>nodemon</strong> comando abaixo.
  
    npm debug
  
</details>

<details>
   <summary><strong>Utilizando o Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o Docker instalado na sua máquina.
  
  </br>
  
  Na raíz do projeto, suba os containers <strong>blogs_api</strong> e <strong>blogs_api_db</strong> utilizando o docker-compose.

    docker-compose up -d
    
  Abra o terminal do container <strong>blogs_api</strong>.

    docker exec -it blogs_api bash

  Uma vez no terminal do container, execute o comando abaixo para instalar as dependencias do projeto.
    
    npm install
    
  Para se conectar com o banco de dados, abra o terminal do container <strong>blogs_api_db</strong>.
  
    docker exec -it blogs_api_db bash
    
  Faça login no banco de dados utilizando as credencias descritas no arquivo <strong>docker-compose.yaml</strong>.
  
    mysql -r root -p

  Execute o comandos para a criação do banco **BlogsApi** 
  
    npm prestart
    
  Para subir o servidor com o <strong>nodemon</strong> utilize o comando abaixo no terminal do container **blogs_api**.
    
    npm run debug
    
</details>
    
---
 
Desenvolvido por [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
