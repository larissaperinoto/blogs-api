const express = require('express');
require('express-async-errors');

const router = require('./routes');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
