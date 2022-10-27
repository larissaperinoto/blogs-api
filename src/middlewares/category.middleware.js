const { validateCategoryFields } = require('../utils/validations');

const categoryValidation = async (req, res, next) => {
  const validation = validateCategoryFields(req.body);
  if (validation) return res.status(400).json({ message: validation });

  next();
};

module.exports = categoryValidation;