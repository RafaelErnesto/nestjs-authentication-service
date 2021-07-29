import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'bob',
      password: '12345678',
    },
    {
      userId: 2,
      username: 'maria',
      password: '7654321',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => username === user.username);
  }
}
