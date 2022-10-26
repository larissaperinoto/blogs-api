const { User } = require('../models');

const findOne = async ({ email, password }) => {
  const response = await User.findOne({
    where: { email, password },
  });

  if (!response) return { message: 'Invalid fields' };

  return response;
};

const insert = async ({ email, password, displayName, image }) => {
  const emailExists = await User.findOne({
    where: { email },
  });

  if (emailExists) return { message: 'User already registered' };

  await User.create({ email, password, displayName, image });
};

const findAll = async () => {
  const users = await User.findAll();
  const usersWithoutPassword = users.map(({ id, email, displayName, image }) => {
    const response = { id, email, displayName, image };
    return response;
  });
  return usersWithoutPassword;
};

module.exports = { findOne, insert, findAll };