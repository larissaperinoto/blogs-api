const { User } = require('../models');

const findOne = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) return { message: 'Invalid fields' };

  return user;
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

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
  });

  if (!user) return { message: 'User does not exist' };

  const { password, ...userWithouPassword } = user.dataValues;
  console.log(userWithouPassword);

  return userWithouPassword;
};

module.exports = { findOne, insert, findAll, findById };