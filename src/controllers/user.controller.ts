import { Request, Response } from 'express';
import UserService from '../service/users.service';

export default class UserController {
  constructor(private newUser = new UserService()) { }

  public createUsers = async (req: Request, res: Response) => {
    const user = req.body;
    const data = await this.newUser.createUsers(user);

    res.status(201).json({ token: data });
  };
}