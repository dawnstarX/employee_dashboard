const db = require("../Models");
const Employee = db.employees;
const Contact = db.contacts;

const createEmployee = async (req, res) => {
  //All the employee details
  const name = req.body.name;
  const position = req.body.position;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;
  const address = req.body.address;

  //All primary Contact details
  const primaryContactName = req.body.primaryContactName;
  const primaryContactPhoneNo = req.body.primaryContactPhoneNo;
  const primaryContactRelationship = req.body.primaryContactRelationship;

  //All secondary Contact details
  const secondaryContactName = req.body.secondaryContactName;
  const secondaryContactPhoneNo = req.body.secondaryContactPhoneNo;
  const secondaryContactRelationship = req.body.secondaryContactRelationship;

  if (!name || !position || !email || !phoneNo || !address) {
    return res.status(400).send({
      message: "Bad Data",
    });
  }

  //employee obj for employees table
  const employeeObj = {
    name,
    position,
    phoneNo,
    email,
    address,
  };

  //primary contact object for contact table
  const primaryContactObj = {
    name: primaryContactName,
    phoneNo: primaryContactPhoneNo,
    relationship: primaryContactRelationship,
    type: "primary",
  };

  //primary contact object for contact table
  const secondaryContactObj = {
    name: secondaryContactName,
    phoneNo: secondaryContactPhoneNo,
    relationship: secondaryContactRelationship,
    type: "secondary",
  };

  try {
    const response = await Employee.create(employeeObj);
    primaryContactObj.employeeId = response.id;
    secondaryContactObj.employeeId = response.id;
    const secondReponse = await Contact.bulkCreate([
      primaryContactObj,
      secondaryContactObj,
    ]);
    res.status(201).send("Employee data has been stores successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = createEmployee;
