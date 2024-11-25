"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGoogleBooks = exports.deleteBook = exports.saveBook = exports.loginUser = exports.createUser = exports.getMe = void 0;
// route to get logged in user's info (needs the token)
var getMe = function (token) {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer ".concat(token),
        },
    });
};
exports.getMe = getMe;
var createUser = function (userData) {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
exports.createUser = createUser;
var loginUser = function (userData) {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
exports.loginUser = loginUser;
// save book data for a logged in user
var saveBook = function (bookData, token) {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer ".concat(token),
        },
        body: JSON.stringify(bookData),
    });
};
exports.saveBook = saveBook;
// remove saved book data for a logged in user
var deleteBook = function (bookId, token) {
    return fetch("/api/users/books/".concat(bookId), {
        method: 'DELETE',
        headers: {
            authorization: "Bearer ".concat(token),
        },
    });
};
exports.deleteBook = deleteBook;
// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
var searchGoogleBooks = function (query) {
    return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(query));
};
exports.searchGoogleBooks = searchGoogleBooks;
