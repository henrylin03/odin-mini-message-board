const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function addNewMessage({ text, username }) {
	const SQL_QUERY = `
	INSERT INTO messages (text, username)
	VALUES
		($1, $2)`;
	const values = [text, username];

	await pool.query(SQL_QUERY, values);
}

module.exports = {
	getAllMessages,
	addNewMessage,
};
