import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Products from '../interfaces/products';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }
  
  public createProduct(product: Products): Promise<Products> {
    const data = this.model.createProducts(product);
    return data;
  }

  public async productAll(): Promise<Products[]> {
    const result = await this.model.productAll();
    return result;
  }
}