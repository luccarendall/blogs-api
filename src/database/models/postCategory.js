module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (db) => {
      db.Category.belongsToMany(db.BlogPost, {
        through: PostCategory,
        foreingKey: "postId",
      });

      db.BlogPost.belongsToMany(db.Category, {
        through: PostCategory,
        foreingKey: "categoryId",
      });
  }

return PostCategory

}
