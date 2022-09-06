const userService = require('../services/userService');

const validationLogin = async (req, res, next) => {
    const data = req.body;
    if (!data.email || !data.password) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
      );
    }
    
    const result = await userService.login(data);

    if (!result || result === '') {
     return res.status(400).json({
        message: 'Invalid fields',
      });
    }

    next();
};

module.exports = validationLogin;