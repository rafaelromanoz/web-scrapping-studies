"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorMessage = void 0;
const createErrorMessage = (statusCode, message) => ({
    statusCode,
    message,
});
exports.createErrorMessage = createErrorMessage;
