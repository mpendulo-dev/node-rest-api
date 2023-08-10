const mongoose = require("mongoose");

// Book schema
const BookSchema = mongoose.Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
