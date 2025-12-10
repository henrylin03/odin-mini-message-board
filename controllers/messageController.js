const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getMessageById(req, res) {
	const { messageId } = req.params;
	const message = await db.getMessageById(messageId);

	if (message === null) throw new CustomNotFoundError("Message not found");

	const { text, username, added_date_time } = message;

	res.render("message", {
		messageId,
		text,
		username,
		added_date_time,
	});
}

module.exports = { getMessageById };
