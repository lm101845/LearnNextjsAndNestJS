/**
 * @Author liming
 * @Date 2024/8/1 12:26
 **/
import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
  //现在，任何导入 CatsModule 的模块都可以访问 CatsService，并将与导入它的所有其他模块共享同一个实例。
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
