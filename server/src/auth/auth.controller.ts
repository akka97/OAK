import { Body, Res, Controller, HttpStatus, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { UserService } from "../user/user.service";
import { AuthErrors } from "./errors/auth.errors";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/models/user.entity";
import { RegisterDto } from "./dto/RegisterDto";
import { LoginDto } from "./dto/LoginDto";

import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,) { }

    @Post('register')
    public async register(@Body() bodyParam: RegisterDto): Promise<User> {

        if (bodyParam.password !== bodyParam.password_confirm) {
            throw new AuthErrors("passwords does not match", HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(bodyParam?.password, 10);
        return this.userService.registerUser(
            {
                firstname: bodyParam.firstname,
                lastname: bodyParam.lastname,
                email: bodyParam.email,
                password: hashedPassword,
                role: "admin"
            }
        );
    }


    @Post('login')
    public async login(
        @Body() bodyParam: LoginDto,
        @Res({ passthrough: true }) response: Response
    ) {
        const user = await this.userService.findByEmail(bodyParam.email);
        if (!user) {
            throw new AuthErrors("user with this email was not found", HttpStatus.NOT_FOUND)
        }
        const password = await bcrypt.compare(bodyParam.password, user?.password)
        if (!password) {
            throw new AuthErrors("user with this password was not found", HttpStatus.NOT_FOUND)
        }

        const jwt = await this.jwtService.signAsync({ id: user.id });

        response.cookie('jwt', jwt, { httpOnly: true });

        return user;
    }

    @Post('logout')
    //fshijme cookie sepse fronti nuk ka akses ti fshije
    public logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt');
        return { "message": "success", "status": 200 }
    }
}
