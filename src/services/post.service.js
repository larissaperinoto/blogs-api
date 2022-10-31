const { Op } = require('sequelize');

const { BlogPost, User, Category, PostCategory } = require('../models');
const createError = require('../utils/createError');

const insert = async ({ title, content, categoryIds }, { email }) => {
  const categories = categoryIds.map((id) => Category.findOne({
    where: { id },
  }));
  const resolvedPromises = await Promise.all(categories);
  if (resolvedPromises.some((item) => item === null)) {
    throw createError(400, 'one or more "categoryIds" not found');
  }

  const published = new Date();
  const updated = new Date();
  const { dataValues: { id: userId } } = await User.findOne({ where: { email } });

  const { dataValues } = await BlogPost.create({ title, content, userId, published, updated });

  const { id: postId } = dataValues;
  categoryIds.map((id) => PostCategory.create({ postId, categoryId: id }));

  return dataValues;
};

const findAll = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

const findById = async (postId) => {
  const post = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },

    ],
  });

  if (post === null) throw createError(404, 'Post does not exist');
  return post;
};

const update = async (id, { title, content }, { email, password }) => {
  const { dataValues: { id: userId } } = await User.findOne({ where: { email, password } });
  const { dataValues: { userId: userIdPost } } = await BlogPost.findOne({ where: { id } });

  if (userId !== userIdPost) throw createError(401, 'Unauthorized user');

  await BlogPost.update({ title, content }, { where: { id } });

  const postUpdated = await findById(id);
  return postUpdated;
};

const remove = async (id, { email, password }) => {
  const postExists = await BlogPost.findOne({ where: { id } });

  if (postExists === null) throw createError(404, 'Post does not exist');

  const { dataValues: { userId: userIdPost } } = postExists;
  const { dataValues: { id: userId } } = await User.findOne({ where: { email, password } });
  if (userId !== userIdPost) throw createError(401, 'Unauthorized user');

  await BlogPost.destroy({ where: { id } });
  await PostCategory.destroy({ where: { postId: id } });
};

const search = async (q) => BlogPost.findAll({
    where: {
    [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ],
  },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },

    ],
 });

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
  search,
};