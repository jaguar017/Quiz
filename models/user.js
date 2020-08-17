const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    validate: /^.{28}$/,
  },
  email: {
    type: String,
    trim: true,
    validate: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;