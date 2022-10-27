const { validateUserFields } = require('../utils/validations');

const validateUser = (req, res, next) => {
  const message = validateUserFields(req.body);
  if (message) return res.status(400).json({ message });

  next();
};

module.exports = validateUser;