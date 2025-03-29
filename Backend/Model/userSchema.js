const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;