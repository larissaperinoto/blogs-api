const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const { authMiddleware, postValidation } = require('../middlewares');

router.use(authMiddleware);
router.post('/', postValidation, postController.insert);
router.get('/', postController.findAll);

module.exports = router;