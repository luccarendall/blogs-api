const { validateToken } = require('../services/tokenService');

module.exports = (req, res, next) => {
    // const token = req.headers['x-access-token'];
    const { authorization } = req.headers;
    if (authorization === undefined || authorization === '') {
        return res.status(401).json({
            message: 'Token not found',
          });
    }

    const data = validateToken(authorization);
    if (data.message !== undefined || !authorization) {
        return res.status(401).json({ message: data.message });
    }
    req.id = data;
    next();
};