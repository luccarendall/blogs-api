const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const categoriesRoute = Router();

categoriesRoute.post('/categories', categoryController.createCategory);

module.exports = categoriesRoute;