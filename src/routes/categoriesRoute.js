const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const jwtAuth = require('../middlewares/jwtAuth');

const categoriesRoute = Router();

categoriesRoute.post('/categories', jwtAuth, categoryController.createCategory);
categoriesRoute.get('/categories', jwtAuth, categoryController.findAllCategories);

module.exports = categoriesRoute;