const { Router } = require("express");
const { getMessageById } = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/:messageId", getMessageById);

messageRouter.get("/", (_req, res) => {
	res.redirect("/");
});

module.exports = messageRouter;
