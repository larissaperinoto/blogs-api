const { Op } = require('sequelize');

const { BlogPost, User, Category, PostCategory } = require('../models');
const createError = require('../utils/createError');

const verifyCategoryId = async (categoryIds) => {
  const categoryIdsExists = categoryIds.map((id) => Category.findOne({
    where: { id },
  }));

  const resolvedPromises = await Promise.all(categoryIdsExists);

  if (resolvedPromises.some((item) => item === null)) {
    throw createError(400, 'one or more "categoryIds" not found');
  }
};

const verifyIfUserBelongsToPost = async (email, password, userIdPost) => {
  const { id: userId } = await User.findOne({ where: { email, password } });
  if (userId !== userIdPost) throw createError(401, 'Unauthorized user');
};

const insert = async ({ title, content, categoryIds }, { email }) => {
  await verifyCategoryId(categoryIds);

  const date = new Date();
  const { id: userId } = await User.findOne({ where: { email } });

  const post = await BlogPost
    .create({ title, content, userId, published: date, updated: date });

  const { id: postId } = post;
  categoryIds.map((id) => PostCategory.create({ postId, categoryId: id }));

  return post;
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
  const { userId: userIdPost } = await findById(id);
  await verifyIfUserBelongsToPost(email, password, userIdPost);
  await BlogPost.update({ title, content }, { where: { id } });

  const postUpdated = await findById(id);
  return postUpdated;
};

const remove = async (id, { email, password }) => {
  const { userId: userIdPost } = await findById(id);
  await verifyIfUserBelongsToPost(email, password, userIdPost);
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