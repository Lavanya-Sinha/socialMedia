const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
});

const usermodal = mongoose.model("user", userSchema);
module.exports = usermodal;