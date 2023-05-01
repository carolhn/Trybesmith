import express from 'express';

import routesProducts from './routes/routes.products';
import routesUser from './routes/routes.users';
import routerOrders from './routes/routes.orders';

const app = express();

app.use(express.json());

app.use(routesProducts);
app.use(routesUser);
app.use(routerOrders);

export default app;
