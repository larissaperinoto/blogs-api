const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreingKey: 'userId'
    })
  };

  return BlogPostTable;
};

module.exports = BlogPostSchema;
