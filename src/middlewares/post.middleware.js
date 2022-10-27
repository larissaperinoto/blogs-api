const { validatePostFields, validatePostUpdateFields } = require('../utils/validations');

const allPostFieldsExists = (req, res, next) => {
  const validation = validatePostFields(req.body);
  if (validation) return res.status(400).json({ message: validation });

  next();
};

const updatePostFieldsExists = (req, res, next) => {
  const validation = validatePostUpdateFields(req.body);
  if (validation) return res.status(400).json({ message: validation });

  next();
};

module.exports = { allPostFieldsExists, updatePostFieldsExists };