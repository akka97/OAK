import { Injectable } from '@nestjs/common';
import { Area } from "./models/area.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
    constructor(@InjectRepository(Area) private readonly areaRepository: Repository<Area>) {
    }

    public async create(data) {
        const result = await this.areaRepository.save(data);
        return result;
    }

    public async getAll() {
        const result = await this.areaRepository.find();
        return result;
    }

    public async delete(id: number) {
        const result = await this.areaRepository.delete(id);
        return result;
    }
}
