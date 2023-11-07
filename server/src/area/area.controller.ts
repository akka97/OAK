import { Body, Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { Area } from "./models/area.entity";
import { AreaDto } from "./models/area.dto";
import { AreaService } from "./area.service";

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) { }

    @Post()
    public async createArea(@Body() bodyParam: AreaDto): Promise<Area> {
        const result = await this.areaService.create(bodyParam);
        return result;
    }

    @Get()
    public async getAllGym(): Promise<Area[]> {
        const result = await this.areaService.getAll();
        return result;
    }

    @Patch(':id')
    public async updateGym(@Param('id') id: number, @Body() bodyParam: AreaDto) {
        const result = await this.areaService.update(id, bodyParam);
        return result;
    }

    @Delete(':id')
    public async deleteGym(@Param('id') id: number) {
        console.log("delete backend");
        const result = await this.areaService.delete(id);
        return result;
    }

}
