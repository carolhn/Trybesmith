import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const routesProducts = Router();
const prodController = new ProductsController();

routesProducts.post('/products', prodController.createProducts);
routesProducts.get('/products', prodController.productAll);

export default routesProducts;
