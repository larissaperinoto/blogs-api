const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id:{ type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false
  });



  return CategoryTable;
};

module.exports = CategorySchema;
