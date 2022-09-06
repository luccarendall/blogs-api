const { Router } = require('express');
const postController = require('../controllers/postController');
const jwtAuth = require('../middlewares/jwtAuth');
const validatePost = require('../middlewares/validatePost');

const postsRoute = Router();

postsRoute.post('/post', jwtAuth, validatePost, postController.publishPost);

module.exports = postsRoute;