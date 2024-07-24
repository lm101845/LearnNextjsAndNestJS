import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

// interface PartialUser {
//   id: number;
//   // 可以添加其他已知的属性，或者使用 [key: string]: any 来表示其他未知属性
//   [key: string]: any; // 谨慎使用，这会使得除了 id 以外的其他属性类型都是 any
// }

export type Role = 'INTERN' | 'ENGINEE' | 'ADMIN';
@Controller('users') // /users
export class UsersController {
  // const usersService = new UsersService()
  constructor(private readonly usersService: UsersService) {}
  /**
   * GET /users
   * GET /users/:id
   * POST /users/:id
   * PATCH /users/:id
   */
  @Get() // GET /users  or /users?role=value&age=28
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: Role) {
    // return [];
    return this.usersService.findAll(role);
  }

  // @Get('interns') // GET /users/interns
  // findAllInterns() {
  //   return [];
  // }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    // return { id };
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: { name: string; email: string; role: Role }) {
    // return user;
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  //在NestJS中，@Patch() 是一个路由装饰器，用于标识一个处理 HTTP PATCH 请求的路由处理方法。
  // PATCH 请求通常用于对资源的部分更新，即只更新资源的某些字段，而不是整个资源。
  update(
    @Param('id') id: string,
    @Body() userUpdate: { name?: string; email?: string; role?: Role },
  ) {
    // return { id, ...userUpdate };
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    // return { id };
    return this.usersService.delete(+id);
  }
}
