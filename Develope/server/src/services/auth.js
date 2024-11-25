"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.authenticateToken = exports.authMiddleware = exports.createToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var createToken = function (user) {
    var payload = { _id: user._id, username: user.username, email: user.email };
    var secretKey = process.env.JWT_SECRET_KEY || '';
    return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: '1h' });
};
exports.createToken = createToken;
var authMiddleware = function (req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).send('Authorization token required');
    }
    try {
        var secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            return res.status(500).send('JWT secret is not defined');
        }
        var decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        return next();
    }
    catch (error) {
        return res.status(401).send('Invalid token');
    }
};
exports.authMiddleware = authMiddleware;
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var token = authHeader.split(' ')[1];
        var secretKey = process.env.JWT_SECRET_KEY || '';
        jsonwebtoken_1.default.verify(token, secretKey, function (err, user) {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            return next();
        });
    }
    else {
        res.sendStatus(401); // Unauthorized
    }
};
exports.authenticateToken = authenticateToken;
var signToken = function (username, email, _id) {
    var payload = { username: username, email: email, _id: _id };
    var secretKey = process.env.JWT_SECRET_KEY || '';
    return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: '1h' });
};
exports.signToken = signToken;
