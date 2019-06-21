const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const govEmployee = new Schema({
  empName: {
    type: String
  },
  nic: {
    type: String
  }
});

module.exports = mongoose.model("governmentemployees", govEmployee);
