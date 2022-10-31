const { User } = require('../models');
const createError = require('../utils/createError');

const findByCredentials = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) throw createError(400, 'Invalid fields');
    return user;
};

module.exports = { findByCredentials };