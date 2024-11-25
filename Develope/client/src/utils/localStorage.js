"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBookId = exports.saveBookIds = exports.getSavedBookIds = void 0;
var getSavedBookIds = function () {
    var savedBookIds = localStorage.getItem('saved_books')
        ? JSON.parse(localStorage.getItem('saved_books'))
        : [];
    return savedBookIds;
};
exports.getSavedBookIds = getSavedBookIds;
var saveBookIds = function (bookIdArr) {
    if (bookIdArr.length) {
        localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
    }
    else {
        localStorage.removeItem('saved_books');
    }
};
exports.saveBookIds = saveBookIds;
var removeBookId = function (bookId) {
    var savedBookIds = localStorage.getItem('saved_books')
        ? JSON.parse(localStorage.getItem('saved_books'))
        : null;
    if (!savedBookIds) {
        return false;
    }
    var updatedSavedBookIds = savedBookIds === null || savedBookIds === void 0 ? void 0 : savedBookIds.filter(function (savedBookId) { return savedBookId !== bookId; });
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
    return true;
};
exports.removeBookId = removeBookId;
