const { User } = require('../models');

const findByCredentials = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) return { message: 'Invalid fields' };

  return user;
};

module.exports = { findByCredentials };