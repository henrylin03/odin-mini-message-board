const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* set up EJS templating engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* routes */
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
