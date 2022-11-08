const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());

// userName : adminDB
// pass : fTHTcrpRTW7E1XdH

const uri =
  "mongodb+srv://adminDB:fTHTcrpRTW7E1XdH@cluster0.kxkmed0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("database connected");
  client.close();
});

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
