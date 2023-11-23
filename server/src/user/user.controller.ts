import { Controller, Get, Post, Body } from '@nestjs/common';
import { HasPermission } from 'src/decorators/has-permission.decorators';
import { UserService } from './user.service';
import { UserDto } from "./models/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HasPermission("admin")
    @Get()
    public async getAllUsers(): Promise<UserDto[]> {
        const result = await this.userService.getAll();
        return result;
    }

    @HasPermission("admin")
    @Post()
    public async createArea(@Body() bodyParam: UserDto): Promise<UserDto> {
        const result = await this.userService.registerUser(bodyParam);
        return result;
    }
}
