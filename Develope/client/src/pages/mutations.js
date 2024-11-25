"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_BOOK = exports.SAVE_BOOK = exports.ADD_USER = exports.LOGIN_USER = void 0;
var client_1 = require("@apollo/client");
exports.LOGIN_USER = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"], ["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"])));
exports.ADD_USER = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation AddUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"], ["\n  mutation AddUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"])));
exports.SAVE_BOOK = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation SaveBook(\n    $bookId: String!\n    $authors: [String]!\n    $description: String\n    $title: String!\n    $image: String\n    $link: String\n  ) {\n    saveBook(\n      bookId: $bookId\n      authors: $authors\n      description: $description\n      title: $title\n      image: $image\n      link: $link\n    ) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"], ["\n  mutation SaveBook(\n    $bookId: String!\n    $authors: [String]!\n    $description: String\n    $title: String!\n    $image: String\n    $link: String\n  ) {\n    saveBook(\n      bookId: $bookId\n      authors: $authors\n      description: $description\n      title: $title\n      image: $image\n      link: $link\n    ) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"])));
exports.REMOVE_BOOK = (0, client_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  mutation RemoveBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"], ["\n  mutation RemoveBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
