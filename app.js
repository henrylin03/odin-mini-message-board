const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* middleware to parse form data into req.body in router */
app.use(express.urlencoded({ extended: true }));

/* set up EJS templating engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* routes */
app.use("/", indexRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}!`);
});
