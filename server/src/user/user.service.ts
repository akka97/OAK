import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./models/user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    public async registerUser(data): Promise<User> {
        const result = await this.userRepository.save(data);
        return result;
    }

    public async findByEmail(email): Promise<any> {
        const result = await this.userRepository.findOneBy({ email })
        return result;
    }
}
