const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const { authMiddleware, postValidation } = require('../middlewares');

router.use(authMiddleware);
router.post('/', postValidation, postController.insert);
router.get('/:id', postController.findById);
router.get('/', postController.findAll);
router.put('/:id', postController.update);

module.exports = router;