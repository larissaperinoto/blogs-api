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
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategoryTable,
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;