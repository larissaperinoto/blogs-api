require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('../swagger.json');
const app = require('./app');

const port = process.env.API_PORT || 3000;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
