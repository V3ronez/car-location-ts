import { CategoryTDO } from '../../dtos/category.body';

export abstract class ICategoryRepository {
  abstract create(category: CategoryTDO): Promise<void>;
  abstract findById(id: string);
  abstract findAll();
  abstract findByName(name: string);
}
