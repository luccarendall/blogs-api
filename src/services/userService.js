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

const findAllUsers = async () => {
    const data = await User.findAll(); 
    // console.log(data);
    const mapAllData = data.map(({ id, displayName, email, image }) => (
        { id, displayName, email, image }));

    return mapAllData;
};

const findUserById = async ({ id }) => {
    // const userPwd = dataValues.password;
    try {
        const userID = await User.findByPk(id);
        delete userID.dataValues.password;
        return userID;
    } catch (err) {
        return false;
    }
};       

module.exports = { 
    login, 
    createUser,
    findAllUsers,
    findUserById,
 };