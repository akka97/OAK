import { SetMetadata } from "@nestjs/common";
export const IsPublic = (access: string) => {
    return SetMetadata('access', access);
}