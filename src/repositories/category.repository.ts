import { CategoryTDO } from '../dtos/category.body';
import { Category } from '../entities/Category';
import { CategoryExistsError } from '../errors/category.unique.name';
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

  async create(categoryBody: CategoryTDO): Promise<void | CategoryExistsError> {
    const category = new Category({
      name: categoryBody.name,
      description: categoryBody.description,
      created_at: new Date(),
    });
    await this.categories.push(category);
  }

  async findByName(
    name: string,
  ): Promise<Category | CategoryExistsError | undefined> {
    return await this.categories.find((category) => category.name == name);
  }
}
