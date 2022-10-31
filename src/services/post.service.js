const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const config = require('../config/config');
const createError = require('../utils/createError');

const { BlogPost, User, Category, PostCategory } = require('../models');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const verifyCategoryIds = async (categoryIds) => {
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
  await verifyCategoryIds(categoryIds);
  const { id: userId } = await User.findOne({ where: { email } });
  const date = new Date();

  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost
        .create({ title, content, userId, published: date, updated: date }, { transaction: t });

      const { id: postId } = post;
      const promises = categoryIds.map((id) => PostCategory
      .create({ postId, categoryId: id }, { transaction: t }));
      await Promise.all(promises);

      return post;
    });

    return result;
  } catch (e) {
    throw createError(500, 'Internal Server Error');
  }
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