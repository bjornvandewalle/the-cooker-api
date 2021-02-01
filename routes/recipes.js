const express = require("express");
const recipeController = require("../controllers/recipe");

const router = express.Router();

router.get("", recipeController.getRecipes);
router.get("/:id", recipeController.getRecipe);
router.post("", recipeController.createRecipe);

module.exports = router;
