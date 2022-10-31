const { postService } = require('../services');

const insert = async (req, res) => {
  const post = await postService.insert(req.body, req.user);
  res.status(201).json(post);
};

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.findById(id);
  res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const postUpdated = await postService.update(id, req.body, req.user);
  res.status(200).json(postUpdated);
};

const remove = async (req, res) => {
  const { id } = req.params;
  await postService.remove(id, req.user);
  res.sendStatus(204);
};

const search = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    const posts = await postService.findAll();
    return res.status(200).json(posts);
  }

  const post = await postService.search(q);
  return res.status(200).json(post);
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
  search,
};