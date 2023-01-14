import { PrismaRepository } from '../../../database/prisma/category.repository';
import { ListCategoriesUseCase } from './list.categories';
import { ListCategoriesController } from './list.categories.controller';

const categoriesRepository = new PrismaRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
