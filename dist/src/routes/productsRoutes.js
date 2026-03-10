"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/', (req, res) => {
    res.send('get a list of products');
});
productRouter.get('/:id', (req, res) => {
    res.send('get the product ${req.params.id}');
});
productRouter.post('/', (req, res) => {
    res.send('Create a new product with ID: ${req.body.id}');
});
productRouter.patch('/:id', (req, res) => {
    res.send('Update the product ${req.params.id} with the values ${req.body.name}, ${req.params.price}, ${req.params.stock}');
});
productRouter.delete('/', (req, res) => {
    res.send('Delete the product ${req.body.id}');
});
exports.default = productRouter;
//# sourceMappingURL=productsRoutes.js.map