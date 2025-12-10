require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
	connectionString: process.env.PG_DATABASE_URL,
	ssl: {
		require: true,
	},
});
