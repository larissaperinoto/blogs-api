const createToken = require('../utils/createToken');
const { userService } = require('../services');

const login = async (req, res) => {
  const isLoged = await userService.findByResgister(req.body);
  if (isLoged.message) return res.status(400).json({ message: isLoged.message });

  const token = createToken(req.body);
  res.status(200).json({ token });
};

const insert = async (req, res) => {
  const messageDB = await userService.insert(req.body);
  if (messageDB) return res.status(409).json(messageDB);

  const token = createToken(req.body);
  res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const users = await userService.findAll();
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  if (user.message) return res.status(404).json({ message: user.message });
  res.status(200).json(user);
};

const remove = async (req, res) => {
  await userService.remove(req.user);

  res.sendStatus(204);
};

module.exports = {
  login,
  insert,
  findAll,
  findById,
  remove,
};