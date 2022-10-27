const createToken = require('../utils/createToken');
const { loginService } = require('../services');

const findByCredentials = async (req, res) => {
  const isLoged = await loginService.findByCredentials(req.body);
  if (isLoged.message) return res.status(400).json({ message: isLoged.message });

  const token = createToken(req.body);
  res.status(200).json({ token });
};

module.exports = { findByCredentials };
