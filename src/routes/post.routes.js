const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const { authMiddleware,
  postValidation: { allPostFieldsExists, updatePostFieldsExists },
} = require('../middlewares');

router.use(authMiddleware);
router.post('/', allPostFieldsExists, postController.insert);
router.get('/search', postController.search);
router.get('/:id', postController.findById);
router.get('/', postController.findAll);
router.put('/:id', updatePostFieldsExists, postController.update);
router.delete('/:id', postController.remove);

module.exports = router;