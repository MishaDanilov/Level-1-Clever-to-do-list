const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

const config = {
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
};

module.exports = config;
