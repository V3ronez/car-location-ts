import { CategoryTDO } from '../dtos/category.body';
import { Category } from '../entities/category';
import { CategoryExistsError } from '../errors/category.unique.name';

export abstract class ICategoryRepository {
  abstract create(category: CategoryTDO): Promise<void | CategoryExistsError>;
  abstract findById(): Promise<Category | null>;
  abstract findAll(): Promise<Category[] | null>;
  abstract findByName(
    name: string,
  ): Promise<Category | CategoryExistsError | undefined>;
}
