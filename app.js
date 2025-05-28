const path = require("node:path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

/* set up EJS templating engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
