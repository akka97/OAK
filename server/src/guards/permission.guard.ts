import { CanActivate, ExecutionContext, Injectable, HttpStatus } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { AuthErrors } from "../auth/errors/auth.errors";
import { request } from "express";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
        private userSerice: UserService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const access = this.reflector.get('access', context.getHandler());

        //console.log("PermissionGuard------", access);
        if (access === "public") {
            return true;
        }
        const cookie = request.cookies.jwt;
        const jwt_verify = await this.jwtService.verifyAsync(cookie).catch((error) => { return false });

        //console.log("jwtService------", jwt_verify);

        if (jwt_verify == false) {
            throw new AuthErrors("Anauthoriezed User , you must be Loged In ", HttpStatus.UNAUTHORIZED);
        }
        const result = await this.userSerice.findById(jwt_verify.id);
        request.user = result;
        return true;

    }
}