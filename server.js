const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const cart = require("./routes/cart");
const paycheck = require("./routes/paycheck");


const Products = require("./routes/Products");

const config = require("config");
const jwt = require("jsonwebtoken");
const secret = config.get("secret");

const User = require("./models/User");

const app = express();
app.use(express.json());






app.use("/user", user);
app.use("/Products", Products);
app.use("/Carts", cart);
app.use("/Payment", paycheck);

connectDB();

app.listen(8000, (err) =>
  err ? console.error(err) : console.log("server is running on port 8000")
);
