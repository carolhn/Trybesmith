import { Request, Response } from 'express';
import OrdersServices from '../service/orders.service';

export default class OrdersControllers {
  constructor(private newOrders = new OrdersServices()) { }

  public orderAll = async (_req: Request, res: Response) => {
    const result = await this.newOrders.ordersAll();
    res.status(200).json(result);
  };
}