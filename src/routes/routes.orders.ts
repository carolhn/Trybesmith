import { Router } from 'express';
import OrdersControllers from '../controllers/orders.controllers';

const routerOrders = Router();
const ordersControllers = new OrdersControllers();

routerOrders.get('/orders', ordersControllers.orderAll);

export default routerOrders;