// students.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student-dto';
import { UpdateStudentDto } from './dto/update-student-dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.student.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.student.findUnique({
      where: { id },
    });
  }

  async createStudent(createStudentDto: CreateStudentDto) {
    return this.prismaService.student.create({
      data: createStudentDto,
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prismaService.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.student.delete({
      where: { id },
    });
  }
}
