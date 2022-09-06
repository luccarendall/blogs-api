// Crie o modelo ‘User’ em ‘src/database/models/user.js’ com as propriedades corretas

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    displayName: DataTypes.STRING,
    
    email: DataTypes.STRING,
    
    password: DataTypes.STRING,
    
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

return User

};
