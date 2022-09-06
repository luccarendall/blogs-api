const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const data = req.body;

  const categoryData = await categoryService.createCategory(data);
  if (!categoryData) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  return res.status(201).json(categoryData);
};

const findAllCategories = async (_req, res) => {
  const AllcategoriesData = await categoryService.findAllCategories();
  return res.status(200).json(AllcategoriesData);
};

module.exports = { createCategory, findAllCategories };