const JWT = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;

const tokenService = {
    createToken: (id) => {
     const token = JWT.sign(
      { data: id }, JWT_SECRET, { 
        algorithm: 'HS256',
        expiresIn: '1d', 
      },
    );

     return token;
    },

    validateToken: (token) => {
      try {
       const jwtDecode = JWT.verify(token, JWT_SECRET);
    
       return jwtDecode;
      } catch (err) {
        return { message: 'Expired or invalid token' };
      }
    },
};

module.exports = tokenService;