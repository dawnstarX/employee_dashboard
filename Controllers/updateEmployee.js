const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

//controller for handelling updation of single employee
const updateEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.update(req.body, { where: { id } });
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = updateEmployee;
