const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('Post_category', {}, {
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategoryTable,
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategoryTable,
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;