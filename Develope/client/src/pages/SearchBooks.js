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
var react_1 = require("react");
var client_1 = require("@apollo/client");
var mutations_1 = require("./mutations");
var SearchBooks = function () {
    var _a = (0, react_1.useState)(''), query = _a[0], setQuery = _a[1];
    var _b = (0, react_1.useState)([]), searchResults = _b[0], setSearchResults = _b[1];
    var saveBook = (0, client_1.useMutation)(mutations_1.SAVE_BOOK)[0];
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(query))];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    setSearchResults(data.items);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSaveBook = function (book) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, saveBook({
                            variables: {
                                bookId: book.id,
                                authors: book.volumeInfo.authors,
                                description: book.volumeInfo.description,
                                title: book.volumeInfo.title,
                                image: book.volumeInfo.imageLinks.thumbnail,
                                link: book.volumeInfo.infoLink
                            },
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error saving book:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<div>
      <input type="text" placeholder="Search for books" value={query} onChange={function (e) { return setQuery(e.target.value); }}/>
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map(function (book) {
            var _a, _b;
            return (<div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{(_a = book.volumeInfo.authors) === null || _a === void 0 ? void 0 : _a.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
            <img src={(_b = book.volumeInfo.imageLinks) === null || _b === void 0 ? void 0 : _b.thumbnail} alt={book.volumeInfo.title}/>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">View on Google Books</a>
            <button onClick={function () { return handleSaveBook(book); }}>Save</button>
          </div>);
        })}
      </div>
    </div>);
};
exports.default = SearchBooks;
