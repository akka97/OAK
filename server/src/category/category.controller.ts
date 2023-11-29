import { Body, Controller, Get, Post, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { Category } from "./models/category.entity";
import { CategoryDto } from "./models/category.dto";
import { CategoryService } from "./category.service";
import { HasPermission } from 'src/decorators/has-permission.decorators';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    @HasPermission("admin")
    public async createArea(@Body() bodyParam: CategoryDto): Promise<Category> {
        const result = await this.categoryService.create(bodyParam);
        return result;
    }

    @Get()
    @HasPermission("admin")
    public async getAllArea(): Promise<Category[]> {
        const result = await this.categoryService.getAll();
        return result;
    }

    @Patch(':id')
    @HasPermission("admin")
    public async updateArea(@Param('id') id: number, @Body() bodyParam: CategoryDto): Promise<any> {
        const result = await this.categoryService.update(id, bodyParam);
        return result;
    }

    @Delete(':id')
    @HasPermission("admin")
    public async deleteArea(@Param('id') id: number) {
        const result = await this.categoryService.delete(id);
        return result;
    }

}