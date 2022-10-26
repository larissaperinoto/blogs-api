const { Category } = require('../models');

const insert = async ({ name }) => {
  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = {
  insert,
};
