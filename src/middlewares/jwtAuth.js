const { validateToken } = require('../services/tokenService');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (token === undefined || !token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    
    const data = validateToken(token);
    
    if (data.message !== undefined || data.message === 'Expired or invalid token') {
        return res.status(401).json({ message: data.message });
    }
    req.id = data;
    next();
};