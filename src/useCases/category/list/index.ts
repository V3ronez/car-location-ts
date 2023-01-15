import { CategoryPrismaRepository } from '../../../database/prisma/category.repository';
import { ListCategoriesUseCase } from './list.categories';
import { ListCategoriesController } from './list.categories.controller';

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoryPrismaRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
  );
  return listCategoriesController;
};
