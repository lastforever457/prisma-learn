import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsInt()
  number: number;

  @IsNotEmpty()
  @IsString()
  image: string;
}
