
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    
    displayName: DataTypes.STRING,
    
    email: DataTypes.STRING,
    
    password: DataTypes.STRING,
    
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (db) => {
    User.hasMany(db.BlogPost, {foreignKey: 'userId'})
  }
  
return User

};
