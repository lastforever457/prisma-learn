import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly telegramId: number;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsString()
  readonly avatar: string;

  @IsNumber()
  readonly schoolId: number;

  @IsNumber()
  readonly classId: number;
}
