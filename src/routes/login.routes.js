const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { validateLogin } = require('../middlewares');

router.post('/', validateLogin, userController.login);

module.exports = router;
