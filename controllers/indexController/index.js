const { validationResult, matchedData } = require("express-validator");
const db = require("../../db/queries");
const { validateMessage } = require("./validateMessage");

const getAllMessages = async (_req, res) => {
	const messages = await db.getAllMessages();
	res.render("index", { title: "Mini Messageboard", messages: messages });
};

const postNewMessage = [
	validateMessage,
	async (req, res) => {
		const inputErrors = validationResult(req);
		console.log("inputErrors:", inputErrors);
		if (!inputErrors.isEmpty())
			return res.status(400).render("form", {
				inputErrors: inputErrors.array(),
			});

		const { text, username } = matchedData(req);
		await db.addNewMessage({ text, username });
		res.redirect("/");
	},
];

module.exports = { getAllMessages, postNewMessage };
