const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategoryTable,
      as: 'blog_posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategoryTable,
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;