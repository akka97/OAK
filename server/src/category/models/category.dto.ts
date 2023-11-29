import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}