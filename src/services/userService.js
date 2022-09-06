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

module.exports = { login };