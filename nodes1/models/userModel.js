const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lasName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
