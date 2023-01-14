import { PrismaClient } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';
import { ICategoryRepository } from '../../repositories/category/category.repository.interface';

export class PrismaRepository implements ICategoryRepository {
  private prisma = new PrismaClient();
  constructor() {
    this.prisma.$connect;
  }

  async create(category: CategoryTDO): Promise<void> {
    const { name, description } = category;
    await this.prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }

  async findById(id: string) {
    const category = await this.prisma.category.findFirst({
      where: {
        id,
      },
    });
    if (!category) {
      return null;
    }
    return category;
  }

  async findAll() {
    const allRegisters = await this.prisma.category.findMany();
    return allRegisters;
  }

  async findByName(name: string) {
    const category = await this.prisma.category.findFirst({
      where: {
        name,
      },
    });
    if (!category) {
      return null;
    }
    return category;
  }
}
