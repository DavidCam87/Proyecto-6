require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const carRoutes = require("./src/api/routes/car");
const driverRoutes = require("./src/api/routes/driver");

const app = express();
connectDB();
app.use(express.json());
const PORT = 3000;


app.use("/api/v1/drivers", driverRoutes);
app.use("/api/v1/cars", carRoutes);


app.use("/ping", (req, res, next) => {


  return res.status(200).json("pong 🏓");
});
app.use("*", (req, res, next) => {
  return res.status(200).json("Rute not foud 😭😭")
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 👌🏼🆗`);
});