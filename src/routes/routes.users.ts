import { Router } from 'express';
import UserController from '../controllers/user.controller';

const routesUser = Router();
const userController = new UserController();

routesUser.post('/users', userController.createUsers);

export default routesUser;