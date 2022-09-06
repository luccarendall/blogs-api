const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    if (!name || name === undefined) {
        return false;
    }
    const newCategory = await Category.create({ name });
    return newCategory;
};

module.exports = { 
  createCategory, 
 };