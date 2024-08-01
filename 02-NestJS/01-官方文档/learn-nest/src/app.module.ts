import { Module } from '@nestjs/common';

import { CatsController } from './cats/cats.controller';

import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
