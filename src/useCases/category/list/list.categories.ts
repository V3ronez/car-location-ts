import { Category } from '../../../entities/category';
import { ICategoryRepository } from '../../../repositories/category/category.repository.interface';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}
  async execute(): Promise<Category[] | null> {
    const allCategories = await this.categoriesRepository.findAll();
    return allCategories;
  }
}
