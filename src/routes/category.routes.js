const express = require('express');

const router = express.Router();

const { categoryController } = require('../controllers');
const { authMiddleware, categoryValidation } = require('../middlewares');

router.use(authMiddleware);
router.get('/', categoryController.findAll);
router.post('/', categoryValidation, categoryController.insert);

module.exports = router;