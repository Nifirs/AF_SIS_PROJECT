const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accounts = new Schema({
  card: {
    type: String
  },
  amount: {
    type: String
  },
  cvc: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("sampathAccounts", accounts);
