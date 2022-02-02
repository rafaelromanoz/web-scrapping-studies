"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerProductsBuscapeController_1 = require("../controllers/registerProductsBuscapeController");
const registerRouterBuscape = express_1.default.Router();
registerRouterBuscape.get('/', registerProductsBuscapeController_1.registerProductsBuscapeController);
exports.default = registerRouterBuscape;
