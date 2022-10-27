const { validateLogin } = require('../utils/validations');

const loginFieldsExists = (req, res, next) => {
  const message = validateLogin(req.body);
  if (message) return res.status(400).json({ message });

  next();
};

module.exports = loginFieldsExists;