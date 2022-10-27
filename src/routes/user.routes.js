const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { authMiddleware, validateUser } = require('../middlewares');

router.post('/', validateUser, userController.insert);
router.use(authMiddleware);
router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.delete('/me', userController.remove);

module.exports = router;
