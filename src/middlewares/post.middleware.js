const { validatePostFields } = require('../utils/validations');

const postValidation = (req, res, next) => {
  const validation = validatePostFields(req.body);
  if (validation) return res.status(400).json({ message: validation });

  next();
};

module.exports = postValidation;