const express = require("express");
// const db = require('./dbConnection')

const app = express();

// Configurações do Express
// ---------------------------------------------
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

module.exports = app;
