import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolsController } from './schools/schools.controller';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [StudentsModule, PrismaModule, SchoolsModule],
  controllers: [SchoolsController],
})
export class AppModule {}
