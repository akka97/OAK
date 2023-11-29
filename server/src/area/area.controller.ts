import { Body, Controller, Get, Post, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { Area } from "./models/area.entity";
import { AreaDto } from "./models/area.dto";
import { AreaService } from "./area.service";
import { HasPermission } from 'src/decorators/has-permission.decorators';

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) { }

    @Post()
    @HasPermission("admin")
    public async createArea(@Body() bodyParam: AreaDto): Promise<Area> {
        const result = await this.areaService.create(bodyParam);
        return result;
    }

    @Get()
    @HasPermission("admin")
    public async getAllArea(): Promise<Area[]> {
        const result = await this.areaService.getAll();
        return result;
    }

    @Patch(':id')
    @HasPermission("admin")
    public async updateArea(@Param('id') id: number, @Body() bodyParam: AreaDto): Promise<any> {
        const result = await this.areaService.update(id, bodyParam);
        return result;
    }

    @Delete(':id')
    @HasPermission("admin")
    public async deleteArea(@Param('id') id: number) {
        const result = await this.areaService.delete(id);
        return result;
    }

}