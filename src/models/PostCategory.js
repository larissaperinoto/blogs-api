const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
  }, {
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