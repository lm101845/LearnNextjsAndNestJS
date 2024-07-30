import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * 要创建 Nest 应用实例，我们使用核心 NestFactory 类。NestFactory 公开了一些允许创建应用实例的静态方法。
 * create() 方法返回一个应用对象，它实现了 INestApplication 接口。该对象提供了一组方法，将在接下来的章节中进行描述。
 * 在上面的 main.ts 示例中，我们只是启动了 HTTP 监听器，它让应用等待入站 HTTP 请求。
 **/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
