const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getMessageById(req, res) {
	const { messageId } = req.params;
	const message = await db.getMessageById(messageId);

	if (!message) {
		throw new CustomNotFoundError("Message not found");
	}

	res.render("message", {
		messageId: messageId,
		text: message.text,
		user: message.user,
		added: message.added,
	});
}

module.exports = { getMessageById };
