import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SchoolsController } from './schools.controller';

@Module({
  imports: [PrismaModule],
  controllers: [SchoolsController],
  providers: [SchoolsService],
  exports: [SchoolsService],
})
export class SchoolsModule {}
