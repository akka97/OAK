import { Body, Controller, Get, Post, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { IsPublic } from 'src/decorators/public.decorators';
import { HasPermission } from 'src/decorators/has-permission.decorators';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('gyms')
export class GymsController {
    constructor(private readonly gymService: GymsService) { }

    @Post()
    @HasPermission("admin")
    @UseInterceptors(FileInterceptor('file'))
    public async createArea(@Body() bodyParam, @UploadedFile() file: Express.Multer.File): Promise<any> {
        const result = await this.gymService.create(bodyParam);
        return result;
    }

    @Get()
    @IsPublic("public")
    public async getAllGym(): Promise<any> {
        const result = await this.gymService.getAll();
        return result;
    }

    @Delete(':id')
    @HasPermission("admin")
    public async deleteGym(@Param('id') id: number) {
        const result = await this.gymService.delete(id);
        return result;
    }

}
