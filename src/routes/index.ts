import { Router, Request, Response} from "express";
import productRouter from "./productsRoutes";

const apiRouter:Router = Router();

apiRouter.use('/product', productRouter);

apiRouter.get('/product', (req:Request, res:Response) => {
    res.send('hello world')
});

export default apiRouter;