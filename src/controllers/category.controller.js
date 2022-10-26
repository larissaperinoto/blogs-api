const { categoryService } = require('../services');

const insert = async (req, res) => {
  const category = await categoryService.insert(req.body);

  res.status(201).json(category);
};

module.exports = {
  insert,
};