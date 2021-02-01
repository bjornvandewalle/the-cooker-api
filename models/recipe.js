const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: false },
  ingredients: { type: String, required: true },
  imagePath: { type: String, required: false },
});

module.exports = mongoose.model("Recipe", recipeSchema);
