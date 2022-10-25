const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
  });



  return CategoryTable;
};

module.exports = CategorySchema;
