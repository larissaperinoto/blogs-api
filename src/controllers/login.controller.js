const createToken = require('../utils/createToken');
const { loginService } = require('../services');

const findByCredentials = async (req, res) => {
  await loginService.findByCredentials(req.body);
  const token = createToken(req.body);

  res.status(200).json({ token });
};

module.exports = { findByCredentials };
