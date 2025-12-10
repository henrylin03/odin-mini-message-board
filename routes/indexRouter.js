const { Router } = require("express");
const {
	getAllMessages,
	postNewMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", (_req, res) => res.render("form"));
// indexRouter.post("/new", postNewMessage);

module.exports = indexRouter;
