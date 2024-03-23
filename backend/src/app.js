require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const connectDB = require("./db/connect");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Blog API</h1>");
});

const PORT = process.env.PORT || 3000;

const start = (async = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
});

start();
