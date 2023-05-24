const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

//controller for handelling deletion of single employee
const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    await Employee.destroy({ where: { id } });
    res.status(200).send(`Employees' record has been deleted successfully!`);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = deleteEmployee;
