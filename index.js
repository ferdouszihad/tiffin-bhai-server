const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Ferdous! Dashing Handsome Guy 😎");
});

app.get("/about", (req, res) => {
  res.send("Zihad Dashing Handsome Guy 😎. Shob meye tar jonne pagol");
});

app.get("/profession", (req, res) => {
  res.send("Ferdous Zihad is a Professional Lover 😎😍");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
