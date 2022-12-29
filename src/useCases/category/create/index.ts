import { CategoriesRepository } from '../../../repositories/category/category.repository';
import { CreateCategory } from './create.category';
import { CreateCategoryController } from './create.category.controller';

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategory(categoriesRepository);
const createControllerCategory = new CreateCategoryController(
  createCategoryUseCase,
);
export { createControllerCategory };
