import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkisController } from './pkis/pkis.controller';

@Module({
  imports: [],
  controllers: [AppController, PkisController],
  providers: [AppService],
})
export class AppModule {}
