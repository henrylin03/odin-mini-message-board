require("dotenv").config();

const { Pool } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const PORT = 5432;

module.exports = new Pool({
	host: PGHOST,
	database: PGDATABASE,
	username: PGUSER,
	password: PGPASSWORD,
	port: PORT,
	ssl: {
		require: true,
	},
});
