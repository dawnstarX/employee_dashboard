// route for all employees and paginated employees

//controller to get all employees without pagination
const getAllEmployees = require("../Controllers/getAllEmployees");
//controller to get all employees with pagination
const getPaginatedEmployees = require("../Controllers/getPaginatedEmployees");

const router = require("express").Router();

router.get("/", (req, res) => {
  getAllEmployees(req, res);
});

router.get("/paginate", (req, res) => {
  getPaginatedEmployees(req, res);
});

module.exports = router;
