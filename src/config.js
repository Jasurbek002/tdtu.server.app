const dotenv = require("dotenv");
dotenv.config();

const secretkey = process.env.SECRETKEY;
const base_url = process.env.BASE_URL
const pgConfig = {
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
};

module.exports = {
  pgConfig,
  secretkey,
  base_url
};
