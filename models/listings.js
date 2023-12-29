const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  furniture: { type: Schema.Types.ObjectId, ref: 'Furniture', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  available: { type: Boolean, required: true },
});

module.exports = mongoose.model('Listing', listingSchema);
