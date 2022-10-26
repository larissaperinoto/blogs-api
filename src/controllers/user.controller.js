const jwt = require('jsonwebtoken');

const { validateLogin, validateNewUser } = require('../utils');
const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const generateToken = (body) => {
  const payload = { ...body, admin: true };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h', algorithm: 'HS256' });
  return token;
};

const login = async (req, res) => {
  const message = validateLogin(req.body);
  if (message) return res.status(400).json({ message });

  const isLoged = await userService.findOne(req.body);
  if (isLoged.message) return res.status(400).json({ message: isLoged.message });

  const token = generateToken(req.body);
  res.status(200).json({ token });
};

const newUser = async (req, res) => {
  const message = validateNewUser(req.body);
  if (message) return res.status(400).json({ message });

  const messageDB = await userService.insert(req.body);
  if (messageDB) return res.status(409).json(messageDB);

  const token = generateToken(req.body);
  res.status(201).json({ token });
};

module.exports = {
  login,
  newUser,
};