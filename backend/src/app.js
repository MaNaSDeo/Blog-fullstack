require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const connectDB = require("./db/connect");

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Blog API</h1>");
});

const start = (async = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
});

start();
