const Sequelize = require("sequelize");
const config = require("./common/config.js");

console.log(config.POSTGRES_HOST);
const sequelize = new Sequelize(
  config.POSTGRES_DB,
  config.POSTGRES_USER,
  config.POSTGRES_PASSWORD,
  {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    dialect: "postgres",
    logging: console.log,
    define: {
      timestamps: false,
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log("База данных подключена."))
  .catch((err) => console.log("Error: ", err.message));

module.exports = sequelize;
