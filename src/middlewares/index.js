const authMiddleware = require('./authenticateToken');
const categoryValidation = require('./category.middleware');
const postValidation = require('./post.middleware');
const validateLogin = require('./login.middleware');
const validateUser = require('./user.middleware');
const errorMiddleware = require('./error.middleware');

module.exports = {
  authMiddleware,
  categoryValidation,
  postValidation,
  validateLogin,
  validateUser,
  errorMiddleware,
};