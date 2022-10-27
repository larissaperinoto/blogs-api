const { BlogPost, User, Category, PostCategory } = require('../models');

const insert = async ({ title, content, categoryIds }, { email }) => {
  const categories = categoryIds.map((id) => Category.findOne({
    where: { id },
  }));
  const resolvedPromises = await Promise.all(categories);
  if (resolvedPromises.some((item) => item === null)) {
    return { message: 'one or more "categoryIds" not found' };
  }

  const published = new Date();
  const updated = new Date();
  const { dataValues: { id: userId } } = await User.findOne({ where: { email } });

  const { dataValues } = await BlogPost.create({ title, content, userId, published, updated });

  const { id: postId } = dataValues;
  categoryIds.map((id) => PostCategory.create({ postId, categoryId: id }));

  return dataValues;
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },

    ],
    attributes: { exclude: ['UserId'] },
  });

  const formatedResponse = posts.map((post) => {
    const { user: { dataValues: user } } = post;
    const { title, content, published, updated, id, userId } = post;
    const categories = post.categories.map(({ dataValues }) => dataValues);
    return { title, content, published, updated, id, userId, user, categories };
  });

  return formatedResponse;
};

module.exports = {
  insert,
  findAll,
};