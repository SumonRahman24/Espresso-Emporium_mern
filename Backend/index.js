const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@espresso-emporium.mhuysj8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("coffeInfoDB");
    const coffeCollection = database.collection("coffee");

    // create route
    app.get("/addCoffee", async (req, res) => {
      const cursor = coffeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/addCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    });

    app.post("/addCoffee", async (req, res) => {
      const coffeeData = req.body;
      const result = await coffeCollection.insertOne(coffeeData);
      res.send(result);
    });

    app.delete("/addCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/addCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const item = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffeInfo = {
        $set: {
          coffe: item.coffe,
          details: item.details,
          chef: item.chef,
          supplier: item.supplier,
          taste: item.taste,
          category: item.category,
          photoUrl: item.photoUrl,
        },
      };

      const result = await coffeCollection.updateOne(
        filter,
        updateCoffeInfo,
        options
      );

      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// middleware
app.use(express.json());
app.use(cors());

// listen server
app.listen(port, () => {
  console.log(`server is running successfully at http://${port}`);
});
