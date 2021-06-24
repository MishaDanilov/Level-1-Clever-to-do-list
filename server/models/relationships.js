const User = require("./User");
const Task = require("./Task");
const sequelize = require("../db");

User.hasMany(Task, { onDelete: "cascade" });

sequelize
  .sync()
  .then(() => {})
  .catch((err) => console.log(err));
