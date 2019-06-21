const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  course_name: {
    type: String
  },
  instructor_name: {
    type: String
  },
  instructor_email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Course = mongoose.model("messages", UserSchema);
