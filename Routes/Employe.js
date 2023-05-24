//routes to get ,update and delete single employee

//controller to get single employee with id
const getSingleEmployee = require("../Controllers/getSingleEmployee");
//controller to update a single employee
const updateEmployee = require("../Controllers/updateEmployee");
//controller to delete the single employee
const deleteEmployee = require("../Controllers/deleteEmployee");

const router = require("express").Router();

router.get("/:id", (req, res) => {
  getSingleEmployee(req, res);
});

router.put("/:id", (req, res) => {
  updateEmployee(req, res);
});

router.delete("/:id", (req, res) => {
  deleteEmployee(req, res);
});

module.exports = router;
