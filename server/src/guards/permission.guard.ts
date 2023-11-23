import { CanActivate, ExecutionContext, Injectable, HttpStatus } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { AuthErrors } from "../auth/errors/auth.errors";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
        private userSerice: UserService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const access = this.reflector.get('access', context.getHandler());
        // console.log(access);
        // if (!access) {
        //     return true;
        // }
        const request = context.switchToHttp().getRequest();
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verifyAsync(cookie).catch((error) => { return false })

        console.log("data-------",data);

        if (data == false) {
            throw new AuthErrors("Token has expired", HttpStatus.UNAUTHORIZED)
        }

        const result = await this.userSerice.findById(data.id);
        console.log("result----", result.role);
        if (result.role === access) {
            return true;
        } else {
            return false;
        }
    }
}