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
exports.registerProductsBuscapeService = void 0;
const registerProductsBuscapeModel_1 = require("../models/registerProductsBuscapeModel");
const puppeteerConfig_1 = require("../puppeteerConfig/puppeteerConfig");
const registerProductsBuscapeService = (category, input) => __awaiter(void 0, void 0, void 0, function* () {
    const foundProductsFromScraping = yield (0, puppeteerConfig_1.scraping)(category, input);
    const formatProducts = foundProductsFromScraping
        .map((product) => ({
        permalink: product.href,
        title: product.title,
        price: product.innerText.split('R$')[1].split('\n')[0],
        thumbnail: product.thumbnail,
        category: category || input,
        site: 'Buscapé',
    }))
        .slice(0, 10);
    yield (0, registerProductsBuscapeModel_1.registerProductsBuscapeModel)(formatProducts);
    return formatProducts;
});
exports.registerProductsBuscapeService = registerProductsBuscapeService;
