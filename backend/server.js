const path = require("path");
const express = require("express");
const connectDB = require("../config/connectDB");
require("colors");
const errorHandler = require("./middlewares/errorHandler");
const routeNotFound = require("./middlewares/routeNotFound");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
const { USER, PORT, MONGODB_STRING } = process.env;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("../routes/drinksRoutes"));

app.use("*", routeNotFound);

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`.green.italic.bold);
});

// console.log("green".green.italic.bold);
// console.log("yellow".yellow.underline);
// console.log("red".red.bold);
