import { Category, PrismaClient } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';
import { ICategoryRepository } from '../../repositories/category/category.repository.interface';

export class CategoryPrismaRepository implements ICategoryRepository {
  private prismaClient = new PrismaClient();

  async create(category: CategoryTDO): Promise<void> {
    const { name, description } = category;
    await this.prismaClient.category.create({
      data: {
        name,
        description,
      },
    });
  }

  async findById(id: string): Promise<Category | null> {
    const category = await this.prismaClient.category.findFirst({
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
    const allCategories = await this.prismaClient.category.findMany();
    if (!allCategories) {
      return null;
    }
    return allCategories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.prismaClient.category.findFirst({
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
