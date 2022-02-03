"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    if (error.statusCode) {
        const { statusCode, message } = error;
        return res.status(statusCode).json({ message });
    }
    return res.status(500).json({ message: 'Server error' });
};
exports.default = errorHandler;
