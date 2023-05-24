const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const createEmployee = require("./Controllers/createEmployee");
app.post("/", (req, res) => {
  createEmployee(req, res);
});

const getAllEmployees = require("./Controllers/getAllEmployees");
app.get("/employees", (req, res) => {
  getAllEmployees(req, res);
});

const getSingleEmployee = require("./Controllers/getSingleEmployee");
app.get("/employee/:id", (req, res) => {
  getSingleEmployee(req, res);
});

const updateEmployee = require("./Controllers/updateEmployee");
app.put("/employee/:id", (req, res) => {
  updateEmployee(req, res);
});

const deleteEmployee = require("./Controllers/deleteEmployee");
app.delete("/employee/:id", (req, res) => {
  deleteEmployee(req, res);
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
