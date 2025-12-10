const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

require("dotenv").config();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* middleware to parse form data into req.body in router */
app.use(express.urlencoded({ extended: true }));

/* set up EJS templating engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* routes */
app.use("/", indexRouter);
app.use("/messages", messageRouter);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Listening on port ${PORT}!`);
});
