import { Router,Request, Response } from "express";
const productRouter:Router = Router();

productRouter.get('/', (req:Request, res:Response) => {
    res.send('get a list of products')
});
productRouter.get('/:id', (req:Request, res:Response) => {
    res.send('get the product ${req.params.id}')
});
productRouter.post('/', (req:Request, res:Response) => {
    res.send('Create a new product with ID: ${req.body.id}')
});
productRouter.patch('/:id', (req:Request, res:Response) => {
    res.send('Update the product ${req.params.id} with the values ${req.body.name}, ${req.params.price}, ${req.params.stock}')
});
productRouter.delete('/', (req:Request, res:Response) => {
    res.send('Delete the product ${req.body.id}')
});

export default productRouter;