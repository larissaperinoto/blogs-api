const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares');

router.post('/', validateLogin, loginController.findByCredentials);

module.exports = router;
