import { CategoryTDO } from '../../dtos/category.body';
import { Category } from '../../entities/category';

export abstract class ICategoryRepository {
  abstract create(category: CategoryTDO): Promise<void>;
  abstract findById(): Promise<Category | null>;
  abstract findAll(): Promise<Category[] | null>;
  abstract findByName(name: string): Promise<Category | undefined>;
}
