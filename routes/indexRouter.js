const { randomUUID } = require("crypto");
const { Router } = require("express");
const indexRouter = Router();
const messages = require("../data/messages");

indexRouter.get("/", (_req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

indexRouter.get("/new", (_req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    id: randomUUID(),
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = indexRouter;
