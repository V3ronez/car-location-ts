import { PrismaClient } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';
import { Category } from '../../entities/category';
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

  findAll() {
    throw new Error('Method not implemented.');
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
    // {
    //   name: category.name,
    //   description: category.description,
    //   created_at: category.created_at,
    // };
  }
}
