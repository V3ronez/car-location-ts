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
  async findById(): Promise<Category> { }
  findAll(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
