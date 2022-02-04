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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraping = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const scraping = (category, input) => __awaiter(void 0, void 0, void 0, function* () {
    if (category) {
        const url = `https://www.buscape.com.br/${category}`;
        const browser = yield puppeteer_1.default.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true,
            ignoreHTTPSErrors: true,
        });
        const page = yield browser.newPage();
        yield page.goto(url);
        const obj = yield page.evaluate(() => {
            const listTitleAndSrc = document
                .querySelectorAll('.Cell_Content__1630r')
                .values();
            const arrayNode = [...listTitleAndSrc];
            const list = arrayNode.map(({ href, innerText, lastChild, title }) => {
                var _a, _b;
                return ({
                    href,
                    innerText,
                    thumbnail: (_b = (_a = lastChild === null || lastChild === void 0 ? void 0 : lastChild.firstChild) === null || _a === void 0 ? void 0 : _a.lastChild) === null || _b === void 0 ? void 0 : _b.firstChild.attributes.src.value,
                    title,
                });
            });
            return list;
        });
        yield browser.close();
        return obj;
    }
    if (input) {
        const url = `https://www.buscape.com.br/search?q=${input}`;
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto(url);
        const obj = yield page.evaluate(() => {
            const listTitleAndSrc = document
                .querySelectorAll('.Cell_Content__1630r')
                .values();
            const arrayNode = [...listTitleAndSrc];
            const list = arrayNode.map(({ href, innerText, lastChild, title }) => {
                var _a, _b;
                return ({
                    href,
                    innerText,
                    thumbnail: (_b = (_a = lastChild === null || lastChild === void 0 ? void 0 : lastChild.firstChild) === null || _a === void 0 ? void 0 : _a.lastChild) === null || _b === void 0 ? void 0 : _b.firstChild.currentSrc,
                    title,
                });
            });
            return list;
        });
        yield browser.close();
        return obj;
    }
});
exports.scraping = scraping;
