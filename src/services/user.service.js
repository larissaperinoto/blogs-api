const { User } = require('../models');

const findOne = async ({ email, password }) => {
  const response = await User.findOne({
    where: { email, password },
  });

  if (!response) return { message: 'Invalid fields' };

  return response;
};

module.exports = { findOne };