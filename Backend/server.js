const express = require("express");
const cors = require("cors");
const foodRouter = require("./routes/route");
const userRouter = require("./routes/userRoutes");
//import env file
require('dotenv').config();
// dbconnnect
require("./config/db");

// 2nd Approach to connnect the database
// const db = require('./config/db')
// db();

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/images", express.static("uploads"));

// app.get - used to request data from the server
app.get("/", (req, res) => {
  res.send("API Working");
});

// used to run the server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
