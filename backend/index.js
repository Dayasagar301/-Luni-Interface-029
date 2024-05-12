const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRouter = require("./routes/User");
const cors=require('cors');
const morgan = require("morgan");

const auth = require("./middleware/auth");
require("dotenv").config();
const connectToDB = require("./config/db");
const { productRouter } = require("./routes/product");

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());


app.use("/users", authRouter);
app.use("/product",productRouter)

app.listen(port, () => {
  try {
    connectToDB(process.env.DB_URL);
    console.log("we are connecte to database successfully");
    console.log(`server is runnin at http://localhost:${port} `);
  } catch (err) {
    console.log(err.message);
  }
});
