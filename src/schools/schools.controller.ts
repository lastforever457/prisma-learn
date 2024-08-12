import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school-dto';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  async findAll() {
    return this.schoolsService.findAll();
  }

  @Post()
  async createSchool(
    @Body() createSchoolDto: { number: number; image: string }
  ) {
    return this.schoolsService.createSchool(createSchoolDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSchoolDto: CreateSchoolDto
  ) {
    return this.schoolsService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.schoolsService.remove(id);
  }
}
