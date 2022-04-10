import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from "./documents/document.module";

@Module({
  imports: [DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
