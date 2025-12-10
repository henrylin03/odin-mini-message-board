require("dotenv").config();

const { Pool } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const PORT = 5432;

module.exports = new Pool({
	connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PORT}/${PGDATABASE}`,
});
