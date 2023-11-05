import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class AreaDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}