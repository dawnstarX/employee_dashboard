const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await db.employees.findOne({
      id,
      include: {
        model: Contact,
      },
    });
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getSingleEmployee;
