import { Module } from "@nestjs/common";
import { DBService } from "src/dataBase/DB.service";
import { DocumentsController } from "./documents.controller";
import { DocumentsService } from "./documents.service";

@Module({
    imports: [],
    controllers: [DocumentsController],
    providers: [DocumentsService, DBService],
  })
  export class DocumentModule{}