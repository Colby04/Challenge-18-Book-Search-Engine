"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ME = void 0;
var client_1 = require("@apollo/client");
exports.GET_ME = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetMe {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"], ["\n  query GetMe {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"])));
var templateObject_1;
