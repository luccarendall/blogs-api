const categoriesFinded = require('../services/categoryService');

module.exports = async (req, res, next) => {
    const categories = await categoriesFinded.findAllCategories();
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const validateCategoryId = categories.every(({ dataValues }) => 
    categoryIds.some((id) => dataValues.id === id));
    
    if (!validateCategoryId) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }

   next();
};