import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get('ab*cd')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findCat(@Req() request: Request): string {
    return 'This action returns a cat';
  }
  @Post('test')
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat----post';
  }

  @Get('docs')
  @Redirect('https://www.baidu.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://www.baidu.com' };
    }
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create2(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
