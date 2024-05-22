const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: [],
  isAdmin: Boolean,
  orders: [],
  photo: String,
});

module.exports = mongoose.model("User", userSchema);
