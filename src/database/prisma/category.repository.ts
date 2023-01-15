import { Category, PrismaClient } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';
import { ICategoryRepository } from '../../repositories/category/category.repository.interface';

export class CategoryPrismaRepository implements ICategoryRepository {
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

  async findById(id: string): Promise<Category | null> {
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

  async findAll(): Promise<Category[] | null> {
    const allCategories = await this.prisma.category.findMany();
    if (!allCategories) {
      return null;
    }
    return allCategories;
  }

  async findByName(name: string): Promise<Category | null> {
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
