const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    if (name === undefined) {
        return false;
    }
    const newCategory = await Category.create({ name });
    return newCategory;
};

const findAllCategories = async () => {
    const categoriesFinded = await Category.findAll();
    return categoriesFinded;
};

module.exports = { 
    createCategory, 
    findAllCategories,
};