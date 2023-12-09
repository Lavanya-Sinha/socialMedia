const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://lavanyasinha400:project-01@socialmedia.ovzqe3g.mongodb.net/"
  );
};
