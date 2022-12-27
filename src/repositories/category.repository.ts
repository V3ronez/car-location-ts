import { CategoryTDO } from '../dtos/category.body';
import { Category } from '../entities/Category';
import { ICategoryRepository } from './category.repository.interface';

export class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  async findAll(): Promise<Category[] | null> {
    return await this.categories;
  }

  findById(): Promise<Category | null> {
    throw new Error('Method not implemented.');
  }

  async create(categoryBody: CategoryTDO): Promise<void> {
    const category = new Category({
      name: categoryBody.name,
      description: categoryBody.description,
      created_at: new Date(),
    });
    await this.categories.push(category);
  }
}
