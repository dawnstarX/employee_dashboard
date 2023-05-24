const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: {
        model: Contact,
        exclude: ["createdAt", "updatedAt"],
      },
      exclude: ["createdAt", "updatedAt"],
    });
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = getAllEmployees;
