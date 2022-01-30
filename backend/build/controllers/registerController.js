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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProductController = exports.getProductByCategoryController = void 0;
const registerService_1 = require("../services/registerService");
const registerModel_1 = require("../models/registerModel");
const registerProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, registerModel_1.registerProductModel)(req.body);
        return res.status(201).json(product);
    }
    catch (error) {
        next(error);
    }
});
exports.registerProductController = registerProductController;
const getProductByCategoryController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.query;
        const products = yield (0, registerService_1.getProductByCategoryService)(category);
        return res.status(200).json(products);
    }
    catch (error) {
        next(error);
    }
});
exports.getProductByCategoryController = getProductByCategoryController;
