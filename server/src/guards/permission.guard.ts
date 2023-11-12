import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
        private userSerice: UserService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const access = this.reflector.get('access', context.getHandler());
        if (!access) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verifyAsync(cookie);
        const result = await this.userSerice.findById(data.id);
        console.log("result----", result.role);
        if (result.role === access) {
            return true;
        } else {
            return false;
        }
    }
}