const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
const color = require("colors");
const { connectDB } = require("./config/db");
const app = express();
app.use(express.json());
app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send("<h1>Welcome to StyleMart App</h1>");
});
const port = process.env.PORT || 8080;

app.listen(port,async () => {
    await connectDB;
  console.log(
    `App is running on ${process.env.MODE} port ${port}`.bgCyan.white
  );
});
