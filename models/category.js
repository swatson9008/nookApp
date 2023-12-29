const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Category', categorySchema);
