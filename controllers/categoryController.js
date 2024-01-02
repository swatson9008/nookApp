const Category = require('../models/category');

// Display list of all categories
exports.categoryList = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Display detail page for a specific category
exports.categoryDetail = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.json(category);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle category create on POST
exports.categoryCreate = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });

  try {
    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};

// Handle category delete on DELETE
exports.categoryDelete = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle category update on PUT
exports.categoryUpdate = async (req, res) => {
  const { name } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true } // Return the updated document
    );
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};
