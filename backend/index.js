import express from "express";
import cors from "cors";
import { MongoClient,ObjectId } from "mongodb";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product",express.static("product"));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("firstdata");
  console.log("MongoDB Connected");
}

connectDB();

app.get("/", (req, res) => {
  res.send("Server Running");
});

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"product/");
  },
  filename:function(req,file,cb){
    cb(null,Date.now() + "-" + file.originalname);
  },
});

const product = multer({ storage:storage})


// REGISTER API
app.post("/api/reg", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const lowerEmail = email.toLowerCase();

    const existingUser = await db
      .collection("register")
      .findOne({ email: lowerEmail });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    const result = await db.collection("register").insertOne({
      name,
      email: lowerEmail,
      password
    });

    res.json({
      message: "Account created successfully",
      result
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


// LOGIN API
app.post("/api/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const lowerEmail = email.toLowerCase();

    const user = await db.collection("register").findOne({
      email: lowerEmail
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

// profile api


app.post("/api/profile", async (req, res) => {

  const { id } = req.body;

  const user = await db.collection("register").findOne({
    _id: new ObjectId(id)
  });

  res.json(user);

});

// product api

app.post('/product', product.single('profile'), async function(req,res){

  try {

    const { name, price, category,tags,originalPrice } = req.body;

    const profile = req.file ? req.file.filename : null;

    const productadd = await db.collection("product").insertOne({
      name,
      price,
      category,
      profile,
      tags,
      originalPrice

    });

    res.json({
      message:"Product added",
      productadd
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }

})

app.get("/product",async function (req,res) {
  const productadd = await db.collection("product").find().toArray(); 

    res.json(productadd);
})
app.get('/productid/:id', async function (req, res) {

  const { id } = req.params;

  const passid = await db.collection("product").findOne({
    _id: new ObjectId(id)
  });

  res.json(passid);

});

// category api.

app.get('/product/:category',async(req,res)=>{

  const category = req.params.category;
  const categorydata = await db.collection("product")
   .find({category:category})
   .toArray();
console.log(category);
   res.json(categorydata);
})
app.listen(3004, () => {
  console.log("Server running on http://localhost:3004");
});