const Recipe = require("../models/recipe");

exports.getRecipes = (req, res, next) => {
  const recipeQuerry = Recipe.find();
  recipeQuerry
    .then((documents) => {
      res.status(200).json({
        message: "Recipes fetched succesfully",
        resipes: documents,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching recipes failed!",
      });
    });
};

exports.getRecipe = (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "Recipe nout found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching recipes failed!",
      });
    });
};

exports.createRecipe = (req, res, next) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
  });
  recipe
    .save()
    .then((createdRecipe) => {
      res.status(201).json({
        message: "Recipe added succesfully",
        recipe: {
          ...createdRecipe,
          id: createdRecipe._id,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating recipe failed!",
      });
    });
};
