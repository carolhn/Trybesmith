import connection from '../models/connection';
import UserModel from '../models/users.model';
import Users from '../interfaces/users';
import createTokenJWT from '../utils/token';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUsers(user: Users): Promise<string> {
    const data = await this.model.createUsers(user);

    const token = createTokenJWT(data);
    return token;
  }
}