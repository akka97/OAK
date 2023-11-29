import { CanActivate, Injectable, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthErrors } from "src/auth/errors/auth.errors";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const jwt = request.cookies.jwt;

        if (!jwt) {
            throw new HttpException("unauthorieze", HttpStatus.UNAUTHORIZED);
        }
        const jwt_verify = await this.jwtService.verifyAsync(jwt).catch((error) => { return false });

        if (jwt_verify == false) {
            throw new AuthErrors("Token has expired,you need to login again", HttpStatus.UNAUTHORIZED);
        }
        return true
    }
}