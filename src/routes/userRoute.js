const express = require('express');
const userController = require('../controllers/userController');
const validationLogin = require('../middlewares/validationLogin');
const validateUser = require('../middlewares/validateUser');
const jwtAuth = require('../middlewares/jwtAuth');

const userRoute = express.Router();

userRoute.post('/login', validationLogin, userController.login);

userRoute.post('/user', validateUser, userController.createUser);

userRoute.get('/user', jwtAuth, userController.findAllUsers);

userRoute.get('/user/:id', jwtAuth, userController.findUserById);

module.exports = userRoute;