const db = require("../db");

async function getAllMessages(_req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function postNewMessage(req, res) {
	const { messageUser, messageText } = req.body;
	await db.addNewMessage({ user: messageUser, text: messageText });
	res.redirect("/");
}

module.exports = { getAllMessages, postNewMessage };
