const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const furnitureSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  amount: { type: Number, required: true },
  formattedPrice: { type: String, required: true },
});

module.exports = mongoose.model('Furniture', furnitureSchema);
