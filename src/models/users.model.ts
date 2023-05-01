import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users';

export default class UserModels {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUsers(user: Users): Promise<Users> {
    const { username, vocation, level, password } = user;

    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    
    return { username, vocation, level, password };
  }
}