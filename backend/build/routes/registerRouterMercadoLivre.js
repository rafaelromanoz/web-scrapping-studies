"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerProductsMercadoLivreController_1 = require("../controllers/registerProductsMercadoLivreController");
const registerRouter = express_1.default.Router();
registerRouter.post('/', registerProductsMercadoLivreController_1.registerProductController);
registerRouter.get('/', registerProductsMercadoLivreController_1.getProductByCategoryController);
exports.default = registerRouter;
