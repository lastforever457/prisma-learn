import { PrismaService } from './prisma.service';

export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}
}
