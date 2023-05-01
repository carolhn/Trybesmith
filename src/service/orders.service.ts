import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Orders from '../interfaces/orders';

export default class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async ordersAll(): Promise<Orders[]> {
    const result = await this.model.ordersAll();
    return result;
  }
}