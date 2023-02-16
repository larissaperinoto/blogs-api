# Blogs API

[Trybe](https://www.betrybe.com/) is a technology school focused on training Web Developers and the Blogs API project was proposed as an activity to improve studies on back-end development.

## Description

The application is an API and a database with the content of a blog. It must allow creating, reading, updating and removing blog information from the database. It also performs authentication to grant permissions to users.


## Technologies and Tools
<div>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="Swagger"/>
</div>

<br>

In the elaboration of the RESTful API, the **Model-Service-Controller(MSC)** architecture was used.The other technologies and tools were:

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Swagger](https://swagger.io/)

## ⚙️ How to use

To run the application start with the repositorie clone using the command bellow.

    git clone git@github.com:larissaperinoto/blogs-api.git
    
Navigate to the project root

    cd blogs-api/
    
<details>
   <summary><strong>Running locally</strong></summary> 
  </br>
  <strong>Obs:</strong> To run the application this way you must have [Node](https://nodejs.org/en/) installed on your machine.
  </br>
  </br>
  
  In the root of the project run the command below to install the dependencies.
  
    npm install
  
  Login to the database using your credentials.
 
    mysql -u <your-username> -p
  
  Run the commands to create the **BlogsApi** database
  
    npm prestart
    
  Start the application with <strong>nodemon</strong> using the command bellow.
  
    npm debug
  
</details>

<details>
   <summary><strong>Running with Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> To run the application this way you must have [Docker](https://www.docker.com/) installed on your machine.
  
  </br>
  
  In the root of the project, upload the <strong>blogs_api</strong> and <strong>blogs_api_db</strong> containers using docker-compose.

    docker-compose up -d
    
  Open the <strong>blogs_api</strong> container terminal.

    docker exec -it blogs_api bash

  Once in the container terminal, run the command below to install the dependencies.
    
    npm install
    
  To connect with database, open the <strong>blogs_api_db</strong> container terminal.
  
    docker exec -it blogs_api_db bash
    
  Login to the database using the credentials described in the <strong>docker-compose.yaml</strong>.
  
    mysql -r root -p

  To create the database, run the command bellow in the <strong>blogs_api</strong> container terminal.
  
    npm prestart
    
  To start the server with <strong>nodemon</strong> use the command bellow in the terminal of the <strong>blogs_api</strong> container.

    
    npm run debug
    
</details>

## Routes

 You can check all routes by accessing the /docs endpoint in your browser when running the application.

<details>
    <summary>Routes preview</summary>
    

![Captura de tela de 2023-01-03 12-17-30](https://user-images.githubusercontent.com/98956659/210414272-be24136f-e2e9-4b72-8c83-f1c98ba4bc84.png)
![Captura de tela de 2023-01-03 12-17-42](https://user-images.githubusercontent.com/98956659/210414520-2b59fb45-9162-4164-81c0-44f2369ea48f.png)

    
</details>
    
---
 
Developed by [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
