const createToken = require('../utils/createToken');
const { userService } = require('../services');

const insert = async (req, res) => {
  await userService.insert(req.body);
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
  res.status(200).json(user);
};

const remove = async (req, res) => {
  await userService.remove(req.user);
  res.sendStatus(204);
};

module.exports = { insert, findAll, findById, remove };