import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school-dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.school.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching schools');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.school.findUnique({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException('Error fetching school');
    }
  }

  async createSchool(createSchoolDto: CreateSchoolDto) {
    try {
      return await this.prisma.school.create({ data: createSchoolDto });
    } catch (error) {
      throw new InternalServerErrorException('Error creating school');
    }
  }

  async update(id: number, updateSchoolDto: CreateSchoolDto) {
    try {
      return await this.prisma.school.update({
        where: { id },
        data: updateSchoolDto,
      });
    } catch (error) {
      throw new InternalServerErrorException('Error updating school');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.school.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException('Error deleting school');
    }
  }
}
