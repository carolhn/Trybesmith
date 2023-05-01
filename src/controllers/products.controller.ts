import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductsController {
  constructor(private newProduct = new ProductService()) { }

  public createProducts = async (req: Request, res: Response) => {
    const product = req.body;

    const data = await this.newProduct.createProduct(product);
    res.status(201).json(data);
  };

  public productAll = async (_req: Request, res: Response) => {
    const result = await this.newProduct.productAll();
    res.status(200).json(result);
  };
}
