import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSchoolDto } from './create-school-dto';

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {
  @ApiProperty({ description: 'The unique ID of the student', required: false })
  readonly id?: number;
}
