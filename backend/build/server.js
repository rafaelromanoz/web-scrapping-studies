"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const registerRouterMercadoLivre_1 = __importDefault(require("./routes/registerRouterMercadoLivre"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const registerRouterBuscape_1 = __importDefault(require("./routes/registerRouterBuscape"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3010;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/register/mercadoLivre', registerRouterMercadoLivre_1.default);
app.use('/register/buscape', registerRouterBuscape_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}! 🏆`);
});
