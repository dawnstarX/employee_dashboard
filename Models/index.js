const dbconfig = require("../Config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

//configuring database
const sequelize = new Sequelize(
  dbconfig.dbName,
  dbconfig.dbUser,
  dbconfig.dbPassword,
  {
    host: dbconfig.dbHost,
    port: dbconfig.dbPort,
    dialect: dbconfig.dbDialect,
  }
);

//connection to mysql database
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {
  Sequelize,
  sequelize,
};
//contact tables
db.contacts = require("./contact")(sequelize, DataTypes);

//employee tables
db.employees = require("./employee")(sequelize, DataTypes);

//RelationShip mapping (one to many)
db.employees.hasMany(db.contacts, {
  foreignkey: "employeeId",
  targetKey: "id",
});
db.contacts.belongsTo(db.employees, {
  foreignkey: "employeeId",
  targetKey: "id",
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("successfull re-sync");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
