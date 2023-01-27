import { Category } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';
import { ICategoryRepository } from '../../repositories/category/category.repository.interface';
import { prisma } from '../prismaConnect';
export class CategoryPrismaRepository implements ICategoryRepository {
  async create(category: CategoryTDO): Promise<void> {
    const { name, description } = category;
    await prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }

  async findById(id: string): Promise<Category | null> {
    const category = await prisma.category.findFirst({
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
    const allCategories = await prisma.category.findMany();
    if (!allCategories) {
      return null;
    }
    return allCategories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prisma.category.findFirst({
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
