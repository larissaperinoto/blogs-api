const { postService } = require('../services');

const insert = async (req, res) => {
  const post = await postService.insert(req.body, req.user);
  const { message } = post;
  if (message) return res.status(400).json({ message });
  res.status(201).json(post);
};

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const post = await postService.findById(id);

  const { message } = post;
  if (message) return res.status(404).json({ message });

  res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;

  const postUpdated = await postService.update(id, req.body, req.user);

  const { message } = postUpdated;
  if (message) return res.status(401).json({ message });

  res.status(200).json(postUpdated);
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
};