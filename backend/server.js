import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";


// Configure environment variables
dotenv.config();

// Configure database
connectDB();

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"))

// Routes
app.use("/auth", authRoutes);

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Define PORT
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
