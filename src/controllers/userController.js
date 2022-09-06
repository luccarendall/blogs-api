const userService = require('../services/userService');

const login = async (req, res) => {
    const data = req.body;
    const loginData = await userService.login(data);

    return res.status(200).json({ token: loginData });
};

module.exports = { login };