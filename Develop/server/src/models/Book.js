"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var mongoose_1 = require("mongoose");
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
var bookSchema = new mongoose_1.default.Schema({
    title: String,
    author: String,
    // other fields
});
exports.Book = mongoose_1.default.model('Book', bookSchema);
