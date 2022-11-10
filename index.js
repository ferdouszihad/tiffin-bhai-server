const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

// userName : adminDB
// pass : fTHTcrpRTW7E1XdH

const uri =
  "mongodb+srv://adminDB:fTHTcrpRTW7E1XdH@cluster0.kxkmed0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const serviceCollection = client
      .db("tiffin-Bhai-Db")
      .collection("services");

    app.get("/3services", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query).sort({ _id: -1 }).limit(3);
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/services", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    app.post("/addService", async (req, res) => {
      const service = req.body;
      const result = await serviceCollection.insertOne(service);
      res.send(result);
    });

    app.get("/services/:sId", async (req, res) => {
      const id = req.params.sId;
      const query = { _id: ObjectId(id) };
      const cursor = serviceCollection.findOne(query);
      const serviceDetail = await cursor;
      res.send(serviceDetail);
    });
  } finally {
  }
}
run().catch((err) => {
  console.log("error");
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
