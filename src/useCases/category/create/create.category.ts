import { CategoryExistsError } from '../../../errors/category.unique.name';
import { ICategoryRepository } from '../../../repositories/category/category.repository.interface';

interface CreateCategoryProps {
  name: string;
  description: string;
}
export class CreateCategory {
  constructor(private categoriesRepository: ICategoryRepository) {}
  async execute({ name, description }: CreateCategoryProps): Promise<void> {
    const category = await this.categoriesRepository.findByName(name);
    if (category) {
      throw new CategoryExistsError();
    }
    await this.categoriesRepository.create({ name, description });
  }
}
