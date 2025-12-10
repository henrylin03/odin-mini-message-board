const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function getMessageById(messageId) {
	const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
		messageId,
	]);

	if (rows.length === 0) return null;
	return rows[0];
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
	getMessageById,
	addNewMessage,
};
