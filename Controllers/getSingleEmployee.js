const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({
      where: { id },
      include: {
        model: Contact,
      },
      exclude: ["createdAt", "updatedAt"],
    });
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getSingleEmployee;
