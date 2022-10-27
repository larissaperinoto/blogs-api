const authMiddleware = require('./authenticateToken');
const categoryValidation = require('./category.middleware');
const postValidation = require('./post.middleware');
const loginValidation = require('./login.middleware');

module.exports = {
  authMiddleware,
  categoryValidation,
  postValidation,
  loginValidation,
};