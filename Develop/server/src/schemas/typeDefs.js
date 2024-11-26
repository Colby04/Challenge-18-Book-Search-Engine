"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    _id: ID\n    username: String\n    email: String\n    bookCount: Int\n    savedBooks: [Book]\n  }\n\n  type Book {\n    bookId: String\n    authors: [String]\n    description: String\n    title: String\n    image: String\n    link: String\n  }\n\n  type Auth {\n    token: String\n    user: User\n  }\n\n  type Query {\n    me: User\n  }\n\n  type Mutation {\n    login(email: String!, password: String!): Auth\n    addUser(username: String!, email: String!, password: String!): Auth\n    saveBook(\n      bookId: String!,\n      authors: [String]!,\n      description: String,\n      title: String,\n      image: String,\n      link: String\n    ): User\n    removeBook(bookId: String!): User\n  }\n"], ["\n  type User {\n    _id: ID\n    username: String\n    email: String\n    bookCount: Int\n    savedBooks: [Book]\n  }\n\n  type Book {\n    bookId: String\n    authors: [String]\n    description: String\n    title: String\n    image: String\n    link: String\n  }\n\n  type Auth {\n    token: String\n    user: User\n  }\n\n  type Query {\n    me: User\n  }\n\n  type Mutation {\n    login(email: String!, password: String!): Auth\n    addUser(username: String!, email: String!, password: String!): Auth\n    saveBook(\n      bookId: String!,\n      authors: [String]!,\n      description: String,\n      title: String,\n      image: String,\n      link: String\n    ): User\n    removeBook(bookId: String!): User\n  }\n"])));
var templateObject_1;
