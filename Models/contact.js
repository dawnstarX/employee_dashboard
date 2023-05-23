module.exports = (sequelize, DataTypes) => {
  const contacts = sequelize.define("contact", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["primary", "secondary"],
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return contacts;
};
