const { categoryService } = require('../services');

const insert = async (req, res) => {
  const category = await categoryService.insert(req.body);
  res.status(201).json(category);
};

const findAll = async (req, res) => {
  const categories = await categoryService.findAll();
  res.status(200).json(categories);
};

module.exports = {
  insert,
  findAll,
};