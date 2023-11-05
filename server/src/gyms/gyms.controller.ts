import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { GymsService } from './gyms.service';
@Controller('gyms')
export class GymsController {
    constructor(private readonly gymService: GymsService) { }

    @Post()
    public async createArea(@Body() bodyParam): Promise<any> {

        const result = await this.gymService.create(bodyParam);
        return result;
    }

    @Get()
    public async getAllGym(): Promise<any> {
        const result = await this.gymService.getAll();
        return result;
    }

    @Delete(':id')
    public async deleteGym(@Param('id') id: number) {
        const result = await this.gymService.delete(id);
        return result;
    }

}
