import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async ordersAll(): Promise<Orders[]> {
    const [query] = await this.connection.execute(
      `SELECT orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
       FROM Trybesmith.orders
       INNER JOIN Trybesmith.products
       ON order_id = products.order_id
       GROUP BY id`,
    );
    
    console.log('aqui é o query', query);
    
    return query as Orders[];
  }
}