import { CategoriesRepository } from '../../../repositories/category/category.repository';
import { CreateCategoryUseCase } from './create.category';
import { CreateCategoryController } from './create.category.controller';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createControllerCategory = new CreateCategoryController(
  createCategoryUseCase,
);
export { createControllerCategory };
