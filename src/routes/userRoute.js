const express = require('express');
const userController = require('../controllers/userController');
const validationLogin = require('../middlewares/validationLogin');

const userRoute = express.Router();

userRoute.post('/login', validationLogin, userController.login);

module.exports = userRoute;