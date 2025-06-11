const { Router } = require("express");
const messageRouter = Router();
const messages = require("../data/messages");

const getMessageById = (messageId) =>
  messages.find((message) => message.id === messageId);

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const messageObject = getMessageById(messageId);

  res.render("message", {
    messageId: messageId,
    text: messageObject.text,
    user: messageObject.user,
    added: messageObject.added,
  });
});

messageRouter.get("/", (_req, res) => {
  res.redirect("/");
});

module.exports = messageRouter;
