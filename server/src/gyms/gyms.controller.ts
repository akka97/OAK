import { Body, Controller, Get, Post, Delete, Param, UseInterceptors, UploadedFiles, Res } from '@nestjs/common';
import { Response } from "express";
import { GymsService } from './gyms.service';
import { IsPublic } from 'src/decorators/public.decorators';
import { HasPermission } from 'src/decorators/has-permission.decorators';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';

@Controller('gyms')
export class GymsController {
    constructor(private readonly gymService: GymsService) { }

    @Post()
    @HasPermission("admin")
    @UseInterceptors(AnyFilesInterceptor(
        {
            storage: diskStorage({
                destination: './uploads/gymsImages',
                filename: (req, file, collback) => {
                    const filename: string = file.originalname.split(".")[0] + uuidv4() + "." + file.originalname.split(".")[1]
                    collback(null, filename);
                }
            })
        }

    ))
    public async createArea(@Body() bodyParam, @UploadedFiles() files: Express.Multer.File[]): Promise<any> {
        console.log("files----", files);

        const file_path = files.map((el, i) => { return el.filename });
        // console.log("file_path----", file_path);

        // return "ok";
        const result = await this.gymService.create(bodyParam, file_path);
        return result;
    }

    @Get('images/:path')
    @IsPublic("public")
    public getImages(@Param('path') path: string, @Res() res: Response) {
        console.log("path----",path);
        res.sendFile(path, { root: 'uploads/gymsImages' })
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
