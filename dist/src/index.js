"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsRoutes_1 = __importDefault(require("./productsRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/product', productsRoutes_1.default);
apiRouter.get('/product', (req, res) => {
    res.send('hello world');
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map