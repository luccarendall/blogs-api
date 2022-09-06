const express = require('express');
const userController = require('../controllers/userController');
const validationLogin = require('../middlewares/validationLogin');
const validateUser = require('../middlewares/validateUser');

const userRoute = express.Router();

userRoute.post('/login', validationLogin, userController.login);

userRoute.post('/user', validateUser, userController.createUser);

module.exports = userRoute;