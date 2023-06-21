const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
genero: { type: String, required: true },

director: { type: String, required: true },
lanzamiento: { type: String, required: true },
  // Otros campos que desees para tu modelo
});

module.exports = mongoose.model('Item', itemSchema);