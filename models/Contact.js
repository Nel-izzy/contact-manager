const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "personal",
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
