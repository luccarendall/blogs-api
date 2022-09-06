const { BlogPost, PostCategory } = require('../database/models');

const publishPost = async ({ title, content, categoryIds }, userId) => {
   const postData = await BlogPost.create({ title, 
     content,
     userId, 
    // https://mzl.la/3APaCt7
     published: Date.now(),
     updated: Date.now(),
    });
    // https://mzl.la/3wWdUt9
      await Promise.all(
         categoryIds.map(async (id) => {
         await PostCategory.create({ postId: postData.dataValues.id, categoryId: id }); 
}),
      );
   return postData;
};

module.exports = { 
  publishPost,
 };