import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./models/user.entity";
import { Repository } from 'typeorm';
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private jwtService: JwtService) { }

    public async getAll(): Promise<User[]> {
        const result = await this.userRepository.find();
        return result;
    }

    public async registerUser(data): Promise<User> {
        const result = await this.userRepository.save(data);
        return result;
    }

    public async findByEmail(email): Promise<any> {
        const result = await this.userRepository.findOneBy({ email })
        return result;
    }

    public async findById(id): Promise<any> {
        const result = await this.userRepository.findOneBy({ id })
        return result;
    }

    public async authUserId(request: Request): Promise<number> {
        const cookie = request.cookies?.jwt;
        const { id } = await this.jwtService.verifyAsync(cookie);
        return id;
    }
}
