const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  release_year: Number,
  genre: String,
});

// Load Schema

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
