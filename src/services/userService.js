const { createToken } = require('./tokenService');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
    const loginData = await User.findOne(
        { where: { 
            email, 
            password,
         }, 
        },
);
    if (loginData === null || loginData === '') {
    //    console.log(result);
       return loginData;
    }
     const token = createToken(loginData.dataValues.id);
    return token;
};

const createUser = async ({ displayName, email, password, image }) => {
    const userData = await User.findOne(
        { where: { 
            email,
         }, 
    },
        );
    if (userData === null || userData === '') {
     const createdUser = await User.create(
        { displayName, email, password, image },
        );
     
     const token = createToken(createdUser.dataValues.id);
       return token;
    } 
        return false;
};

module.exports = { 
    login, 
    createUser,
 };