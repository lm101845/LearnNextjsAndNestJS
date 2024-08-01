import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  //CatsService 通过类构造函数注入。请注意 private 语法的使用。
  // 这种简写允许我们立即在同一位置声明和初始化 catsService 成员。
  constructor(private catsService: CatsService) {}

  @Post
  async create(@Body createCatDto: CreateCatDto): Promise<Cat> {
    this.catsService.create(createCatDto);
  }

  @Get
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
