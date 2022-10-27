const { User } = require('../models');

const findByResgister = async ({ email, password }) => {
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

const findAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
  });

  if (!user) return { message: 'User does not exist' };

  const { password, ...userWithouPassword } = user.dataValues;

  return userWithouPassword;
};

const remove = async ({ email, password }) => User.destroy({ where: { email, password } });

module.exports = { findByResgister, insert, findAll, findById, remove };