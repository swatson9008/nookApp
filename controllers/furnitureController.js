const Furniture = require('../models/furniture');

// Display list of all furniture
exports.furnitureList = async (req, res) => {
  try {
    const furniture = await Furniture.find();
    res.json(furniture);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Display detail page for a specific furniture
exports.furnitureDetail = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) {
      return res.status(404).send('Furniture not found');
    }
    res.json(furniture);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle furniture create on POST
exports.furnitureCreate = async (req, res) => {
  const { name, amount, formattedPrice } = req.body;
  const furniture = new Furniture({ name, amount, formattedPrice });

  try {
    const savedFurniture = await furniture.save();
    res.json(savedFurniture);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};

// Handle furniture delete on DELETE
exports.furnitureDelete = async (req, res) => {
  try {
    await Furniture.findByIdAndRemove(req.params.id);
    res.json({ message: 'Furniture deleted successfully' });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle furniture update on PUT
exports.furnitureUpdate = async (req, res) => {
  const { name, amount, formattedPrice } = req.body;

  try {
    const updatedFurniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      { name, amount, formattedPrice },
      { new: true } // Return the updated document
    );
    res.json(updatedFurniture);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};
