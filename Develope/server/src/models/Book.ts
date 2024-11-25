import mongoose from "mongoose";

export interface BookDocument extends Document {
  bookId: string;
  title: string;
  authors: string[];
  description: string;
  image: string;
  link: string;
}

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  // other fields
});

export const Book = mongoose.model('Book', bookSchema);