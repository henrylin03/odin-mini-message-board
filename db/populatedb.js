#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 280 ) NOT NULL,
  username VARCHAR ( 32 ) NOT NULL,
  added_date_time TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO messages (text, username) 
VALUES
  ('Hello, from Henry', 'HenryLin03'),
  ('This is working', 'NeonTestUser');
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.PG_DATABASE_URL,
	});

	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
