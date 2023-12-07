import { Body, Controller, Get, Post, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { IsPublic } from 'src/decorators/public.decorators';
import { HasPermission } from 'src/decorators/has-permission.decorators';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';


@Controller('gyms')
export class GymsController {
    constructor(private readonly gymService: GymsService) { }

    @Post()
    @HasPermission("admin")
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/gymsImages',
            filename: (req, file, collback) => {
                const filename: string = file.originalname + uuidv4();
                console.log("filename-----", filename);
                collback(null, filename);
            }
        })
    }))
    public async createArea(@Body() bodyParam, @UploadedFile() file: Express.Multer.File): Promise<any> {

        console.log("bodyParam----", file);

        return "ok";
        // const result = await this.gymService.create(bodyParam);
        // return result;
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
