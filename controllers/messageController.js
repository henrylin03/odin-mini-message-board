const db = require("../db");

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("message", {
    messageId: messageId,
    text: message.text,
    user: message.user,
    added: message.added,
  });
}

module.exports = { getMessageById };
