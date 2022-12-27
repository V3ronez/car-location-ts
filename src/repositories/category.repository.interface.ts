import { CategoryTDO } from '../dtos/category.body';
import { Category } from '../entities/Category';

export abstract class ICategoryRepository {
  abstract create(category: CategoryTDO): Promise<void>;
  abstract findById(): Promise<Category | null>;
  abstract findAll(): Promise<Category[] | null>;
}
