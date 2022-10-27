const authMiddleware = require('./authenticateToken');
const categoryValidation = require('./category.middleware');
const postValidation = require('./post.middleware');

module.exports = {
  authMiddleware,
  categoryValidation,
  postValidation,
};