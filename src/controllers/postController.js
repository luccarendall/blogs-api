const postService = require('../services/postService');

const publishPost = async (req, res) => {
    const data = req.body;
    const dataId = req.id.data;
    const postData = await postService.publishPost(data, dataId);
    return res.status(201).json(postData);
};

module.exports = { 
  publishPost,
 };