const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

//getting paginated results for employees with page and limit
const getPaginatedEmployees = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  try {
    const employees = await Employee.findAll({
      offset,
      limit,
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Contact,
        attributes: { exclude: ["createdAt", "updatedAt", "employeeId", "id"] },
      },
    });
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getPaginatedEmployees;
