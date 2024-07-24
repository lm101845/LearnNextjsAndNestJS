import { Injectable } from '@nestjs/common';
import type { Role } from './users.controller';
@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', email: '110@qq.com', role: 'INTERN' },
    { id: 2, name: 'Doe', email: '120@qq.com', role: 'USER' },
    { id: 3, name: 'Smith', email: '130@qq.com', role: 'ADMIN' },
  ];

  findAll(role?: Role) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: Role }) {
    const usersByHighesId = [...this.users].sort((a, b) => (b.id - a.id));
    const newUser = {
      id: usersByHighesId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: { name?: string; email?: string; role?: Role },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...userUpdate,
        };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
