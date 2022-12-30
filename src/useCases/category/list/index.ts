import { CategoriesRepository } from '../../../repositories/category/category.repository';
import { ListCategoriesUseCase } from './list.categories';
import { ListCategoriesController } from './list.categories.controller';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
