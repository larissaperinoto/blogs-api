const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.get('/', authMiddleware, userController.findAll);
router.post('/', userController.newUser);

module.exports = router;
