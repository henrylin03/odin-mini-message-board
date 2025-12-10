const { Pool } = require("pg");
require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

module.exports = new Pool({
	connectionString: `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
});
