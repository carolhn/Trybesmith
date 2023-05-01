import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProducts(product: Products): Promise<Products> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    
    return { id: insertId, name, amount };
  }

  public async productAll(): Promise<Products[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = result;
    return rows as Products[];
  }
}