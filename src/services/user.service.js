const { User } = require('../models');
const createError = require('../utils/createError');

const insert = async ({ email, password, displayName, image }) => {
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) throw createError(409, 'User already registered');

  await User.create({ email, password, displayName, image });
};

const findAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw createError(404, 'User does not exist');
  return user;
};

const remove = async ({ email, password }) => User.destroy({ where: { email, password } });

module.exports = { insert, findAll, findById, remove };