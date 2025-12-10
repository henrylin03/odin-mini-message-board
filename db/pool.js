require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
	connectionString: process.env.PROD_DB_URL,
	ssl: {
		require: true,
	},
});
