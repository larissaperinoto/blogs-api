const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { loginValidation } = require('../middlewares');

router.post('/', loginValidation, userController.login);

module.exports = router;
