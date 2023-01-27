import { AppErrorGeneric } from '../../../errors/AppErrorGeneric';
import { ICategoryRepository } from '../../../repositories/category/category.repository.interface';

interface CreateCategoryProps {
  name: string;
  description: string;
}
export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}
  async execute({ name, description }: CreateCategoryProps): Promise<void> {
    const category = await this.categoriesRepository.findByName(name);
    if (category) {
      throw new AppErrorGeneric('Category already exists', 400);
    }
    await this.categoriesRepository.create({ name, description });
  }
}
