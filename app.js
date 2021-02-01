// Imports
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Routes
const recipeRoutes = require("./routes/recipes");

// Database Connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_US}:${process.env.MONGO_ATLAS_PW}@cluster0.k2zji.gcp.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connection succesfull!");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.use("/api/recipes", recipeRoutes);

module.exports = app;
