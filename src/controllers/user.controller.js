const { validateLogin, validateNewUser } = require('../utils/validations');
const createToken = require('../utils/createToken');
const { userService } = require('../services');

const login = async (req, res) => {
  const message = validateLogin(req.body);
  if (message) return res.status(400).json({ message });

  const isLoged = await userService.findOne(req.body);
  if (isLoged.message) return res.status(400).json({ message: isLoged.message });

  const token = createToken(req.body);
  res.status(200).json({ token });
};

const newUser = async (req, res) => {
  const message = validateNewUser(req.body);
  if (message) return res.status(400).json({ message });

  const messageDB = await userService.insert(req.body);
  if (messageDB) return res.status(409).json(messageDB);

  const token = createToken(req.body);
  res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const response = await userService.findAll();
  res.status(200).json(response);
};

module.exports = {
  login,
  newUser,
  findAll,
};