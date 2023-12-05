import { Injectable } from '@nestjs/common';
import { Gym } from './models/gyms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GymsService {
    constructor(@InjectRepository(Gym) private readonly gymRepository: Repository<Gym>) { }

    public async create(data) {

        const gymObj = {
            name: data.name,
            description: data.description,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            is_active: data.is_active,
            basic_plan: data.basic_plan,
            premium_plan: data.premium_plan,
            area: data.area,
            category: data.category,
            opening: new Date(),
            closing: new Date(),
            image: data.file,
        }

        const result = await this.gymRepository.save(gymObj);
        return result;
    }

    public async getAll() {
        const result = await this.gymRepository.find();
        return result;
    }

    public async delete(id: number) {
        const result = await this.gymRepository.delete(id);
        return result;
    }
}
