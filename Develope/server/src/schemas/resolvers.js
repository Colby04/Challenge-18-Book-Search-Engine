"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var User_1 = require("../models/User");
var Book_1 = require("../models/Book"); // assuming you have Mongoose models set up
var auth_1 = require("../services/auth");
exports.resolvers = {
    Query: {
        me: function (_, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findById(context.user._id)];
                    case 1: return [2 /*return*/, _a.sent()]; // assuming JWT-based auth
                }
            });
        }); },
    },
    Mutation: {
        login: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var user, _c, token;
            var email = _b.email, password = _b.password;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _d.sent();
                        _c = !user;
                        if (_c) return [3 /*break*/, 3];
                        return [4 /*yield*/, user.isCorrectPassword(password)];
                    case 2:
                        _c = !(_d.sent());
                        _d.label = 3;
                    case 3:
                        if (_c) {
                            throw new Error('Incorrect credentials');
                        }
                        token = (0, auth_1.createToken)(user);
                        return [2 /*return*/, { token: token, user: user }];
                }
            });
        }); },
        addUser: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var user, token;
            var username = _b.username, email = _b.email, password = _b.password;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User_1.default.create({ username: username, email: email, password: password })];
                    case 1:
                        user = _c.sent();
                        token = (0, auth_1.createToken)(user);
                        return [2 /*return*/, { token: token, user: user }];
                }
            });
        }); },
        saveBook: function (_1, _a, context_1) { return __awaiter(void 0, [_1, _a, context_1], void 0, function (_, _b, context) {
            var user, newBook;
            var bookId = _b.bookId, authors = _b.authors, description = _b.description, title = _b.title, image = _b.image, link = _b.link;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User_1.default.findById(context.user._id)];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            throw new Error('User not found');
                        }
                        newBook = new Book_1.Book({
                            bookId: bookId,
                            title: title,
                            authors: authors,
                            description: description,
                            image: image,
                            link: link,
                        });
                        user.savedBooks.push(newBook);
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, user];
                }
            });
        }); },
        removeBook: function (_1, _a, context_1) { return __awaiter(void 0, [_1, _a, context_1], void 0, function (_, _b, context) {
            var user;
            var bookId = _b.bookId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User_1.default.findById(context.user._id)];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            throw new Error('User not found');
                        }
                        user.savedBooks = user.savedBooks.filter(function (book) { return book.bookId !== bookId; });
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, user];
                }
            });
        }); },
    },
};
