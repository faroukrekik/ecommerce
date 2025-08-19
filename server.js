const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const Products = require("./routes/Products");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const cart = require("./routes/cart");
const paycheck = require("./routes/paycheck");
const config = require("config");
const app = express();

// Enable CORS
app.use(
  cors({
    origin: config.get("client_url"),
    credentials: true,
  })
);
app.use(express.json());

// Sessions for Passport
app.use(
  session({
    secret: config.get("session_secret"),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());
require("./services/passport");

app.use("/user", user);
app.use("/Products", Products);
app.use("/Carts", cart);
app.use("/Payment", paycheck);

connectDB();

app.listen(8000, (err) =>
  err ? console.error(err) : console.log("server is running on port 8000")
);
