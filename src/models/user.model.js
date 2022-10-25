const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost), {
      as: 'blog_posts',
      foreingKey: 'user_id'
    }
  }

  return UserTable;
};

module.exports = UserSchema;
