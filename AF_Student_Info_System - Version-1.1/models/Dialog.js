const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobiles = new Schema({
  mnumber: {
    type: String
  },
  amount: {
    type: String
  },
  pin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("dialogMobiles", mobiles);
