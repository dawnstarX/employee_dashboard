const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Contact,
        attributes: { exclude: ["createdAt", "updatedAt", "employeeId", "id"] },
      },
    });
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = getAllEmployees;
