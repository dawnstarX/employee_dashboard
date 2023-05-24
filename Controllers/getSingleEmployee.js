const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

//controller for handelling fetch of a single employee
const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Contact,
        attributes: { exclude: ["createdAt", "updatedAt", "employeeId", "id"] },
      },
    });
    res.staus(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getSingleEmployee;
