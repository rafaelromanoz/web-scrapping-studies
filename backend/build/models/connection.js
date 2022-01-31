"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'lexart-fullstack';
const connection = () => mongodb_1.MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(connection => connection.db(DB_NAME))
    .catch(() => {
    process.exit(1);
});
exports.default = connection;
