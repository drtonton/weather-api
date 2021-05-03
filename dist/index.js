"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_router_1 = __importDefault(require("./routers/index.router"));
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(index_router_1.default);
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
//# sourceMappingURL=index.js.map