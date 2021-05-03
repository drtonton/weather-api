"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Weather_router_1 = __importDefault(require("./Weather.router"));
const Router = express_1.default.Router();
Router.use('/weather', Weather_router_1.default);
exports.default = Router;
//# sourceMappingURL=index.router.js.map