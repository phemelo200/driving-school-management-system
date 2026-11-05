<<<<<<< HEAD
/*
 * Name: Naledi Ngobeni
 * Student Number: 230742912
 */

=======
>>>>>>> b7afd27e907303988a0f8e67f9d09a0ee9a763ed
import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString() @MinLength(2) name!: string;
  @IsEmail() email!: string;
  @IsString() phone!: string;
  @IsString() @MinLength(8) password!: string;
}

export class LoginDto {
  @IsEmail() email!: string;
  @IsString() password!: string;
  @IsIn(['student', 'instructor', 'admin']) role!: 'student' | 'instructor' | 'admin';
}
