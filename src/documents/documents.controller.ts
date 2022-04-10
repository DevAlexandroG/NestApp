import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { DocumentsService } from "./documents.service";
import { Document as DocumnetModel} from '@prisma/client';
import CreateDocumentDto from "./dto/create-document.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('documents')
@Controller('documents')
export class DocumentsController
{
    constructor(private documentService: DocumentsService){}

    @Get()
    async getPublishedPosts(): Promise<DocumnetModel[]> {
      return this.documentService.documents({
      });
    }

    @Get(':id')
    async getDocumentById(@Param('id') id:string):  Promise<DocumnetModel>
    {
        return this.documentService.getDocument({ id: id});

    }

    @Post()
    async createDocument(@Body() createDocumentDto : CreateDocumentDto): Promise<DocumnetModel>{
    const { title, text} = createDocumentDto;    
        return this.documentService.createDocument({
            title,
            text
        });
    }

    @Delete('document/:id')
    async deleteDocument(@Param('id') id: string): Promise<DocumnetModel> {
      return this.documentService.deleteDocument({ id: id });
    }

    @Put('publish/:id')
    async publishDocument(@Param('id') id: string): Promise<DocumnetModel> {
      return this.documentService.updateDocument({
        where: { id: id},
        data: { title: "New title" },
      });
    }

}