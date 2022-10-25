const jwt = require('jsonwebtoken');

const validateLogin = require('../utils/validateLogin');
const { userService: { findOne } } = require('../services');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const message = validateLogin(req.body);
  if (message) return res.status(400).json({ message });

  const isLoged = await findOne(req.body);
  if (isLoged.message) return res.status(400).json({ message: isLoged.message });

  const payload = { ...req.body, admin: true };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h', algorithm: 'HS256' });
  console.log(token);
  res.status(200).json({ token });
};

module.exports = {
  login,
};