const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const DB = require("./config/mogodb-connection");
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // used to parse nested form data and retrives req.body object.

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  console.log("hit");
  next();
});

app.get("/owner", ownerRouter);
app.get("/user", userRouter);
app.get("/product", productRouter);

app.listen(3000);
