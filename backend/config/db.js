const mongoose = require("mongoose");

const connectToDB = async (url) => {
  await mongoose.connect(url);
};

module.exports = connectToDB;
