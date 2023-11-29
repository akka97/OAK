import { Injectable } from '@nestjs/common';
import { Category } from "./models/category.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {
    }

    public async create(data) {
        const result = await this.categoryRepository.save(data);
        return result;
    }

    public async getAll() {
        const result = await this.categoryRepository.find();
        return result;
    }

    public async update(id: number, data: any) {
        const result = await this.categoryRepository.update(id, { ...data })
        return result;
    }

    public async delete(id: number) {
        const result = await this.categoryRepository.delete(id);
        return result;
    }
}
