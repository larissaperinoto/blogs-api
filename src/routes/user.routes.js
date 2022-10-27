const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', userController.newUser);
router.use(authMiddleware);
router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.delete('/me', userController.remove);

module.exports = router;
