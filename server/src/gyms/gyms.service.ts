import { Injectable } from '@nestjs/common';
import { Gym } from './models/gyms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GymsService {
    constructor(@InjectRepository(Gym) private readonly gymRepository: Repository<Gym>) { }


    public async create(data) {
        const result = await this.gymRepository.save(data);
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
