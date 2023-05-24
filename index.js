const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

//default route to display a form to get employee data
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//default route retreive employee data from form
const createEmployee = require("./Controllers/createEmployee");
app.post("/", (req, res) => {
  createEmployee(req, res);
});

//Employees router for all employees
const EmployessRouter = require("./Routes/Employees");
app.use("/employees", EmployessRouter);

//Employee router for single employee
const EmployeeRouter = require("./Routes/Employe");
app.use("/employee", EmployeeRouter);

app.listen(3000, () => {
  console.log("listening at port 3000");
});
