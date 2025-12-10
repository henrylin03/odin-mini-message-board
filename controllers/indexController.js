const db = require("../db/queries");

async function getAllMessages(_req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function postNewMessage(req, res) {
	const { text, username } = req.body;
	await db.addNewMessage({ text, username });
	res.redirect("/");
}

module.exports = { getAllMessages, postNewMessage };
