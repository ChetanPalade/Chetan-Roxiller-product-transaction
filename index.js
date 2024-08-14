const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;
// console.log(mongoUrl);
//API_URL=https://s3.amazonaws.com/roxiler.com/product_transaction.json
//MONGODB_URL=mongodb+srv://cwpalade97:Chetan1819@cluster0.orhc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.use(cors());

// Connecting to MongoDB Database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to ${mongoUrl}`);
  })
  .catch((err) => {
    console.log(err);
  });

// API routes
app.get("/", (req, res) => {
  res.send("Hello Roxiler Systems!");
});

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/", transactionRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});