const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: "0",
  },
});

module.exports = Task;
