const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const data = req.body;

  const categoryData = await categoryService.createCategory(data);
  if (!categoryData || categoryData === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return res.status(201).json(categoryData);
};

module.exports = { 
  createCategory,
};