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
exports.getProductByCategoryService = void 0;
const registerProductsMercadoLivreModel_1 = require("../models/registerProductsMercadoLivreModel");
const getProductByCategoryService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, registerProductsMercadoLivreModel_1.getProductsByCategoryModel)(query);
    return products;
});
exports.getProductByCategoryService = getProductByCategoryService;
