const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservation = new Schema({
  status: {
    type: String
  },
  trainName: {
    type: String
  },
  classes: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("reservationList", reservation);
