import { Category } from '@prisma/client';
import { CategoryTDO } from '../../dtos/category.body';

export abstract class ICategoryRepository {
  abstract create(category: CategoryTDO): Promise<void>;
  abstract findById(id: string): Promise<Category | null>;
  abstract findAll(): Promise<Category[] | null>;
  abstract findByName(name: string): Promise<Category | null>;
}
