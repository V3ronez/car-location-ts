import { CategoryTDO } from '../../dtos/category.body';
import { Category } from '../../entities/category';
import { ICategoryRepository } from './category.repository.interface';

export class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  async findAll(): Promise<Category[] | null> {
    return await this.categories;
  }

  findById(): Promise<Category | null> {
    throw new Error('Method not implemented.');
  }

  async create({ name, description }: CategoryTDO): Promise<void> {
    const category = new Category({
      name,
      description,
      created_at: new Date(),
    });
    await this.categories.push(category);
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.categories.find(
      (category) => category.name == name,
    );
    return category;
  }
}
