const userService = require('../services/userService');

const login = async (req, res) => {
    const data = req.body;
    const loginData = await userService.login(data);

    return res.status(200).json({ token: loginData });
};

const createUser = async (req, res) => {
    const data = req.body;
    const userData = await userService.createUser(data);
    if (!userData || userData === undefined) {
        return res.status(409).json({
            message: 'User already registered',
          });
    }
   return res.status(201).json({ token: userData });
};

module.exports = { 
    login, 
    createUser,
 };