import { Injectable } from '@nestjs/common';
import { Prisma, Document } from '@prisma/client';
import { DBService } from 'src/dataBase/DB.service';
// import {Document} from './interfaces/document.interface';
@Injectable()
export class DocumentsService {
    constructor(private dbService: DBService) {}

    async getDocument(id: Prisma.DocumentWhereUniqueInput): Promise<Document | null> {
      return this.dbService.document.findUnique({
        where: id
      })
    }

      async documents(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DocumentWhereUniqueInput;
        where?: Prisma.DocumentWhereInput;
        orderBy?: Prisma.DocumentOrderByWithRelationInput;
      }): Promise<Document[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.dbService.document.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }

      async createDocument(data: Prisma.DocumentCreateInput): Promise<Document> {
        return this.dbService.document.create({
          data,
        });
      }

      async updateDocument(params: {
        where: Prisma.DocumentWhereUniqueInput;
        data: Prisma.DocumentUpdateInput;
      }): Promise<Document> {
        const { where, data } = params;
        return this.dbService.document.update({
          data,
          where,
        });
      }

      async deleteDocument(where: Prisma.DocumentWhereUniqueInput): Promise<Document> {
        return this.dbService.document.delete({
          where,
        });
      }
}
