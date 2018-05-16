var mongoose = require("mongoose");

var RsvpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  guests: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model("Rsvp", RsvpSchema);
