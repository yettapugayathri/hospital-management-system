const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
const User = require("./model/userSchema");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`Hello about world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no 5000`);
});
