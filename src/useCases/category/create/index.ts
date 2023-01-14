import { PrismaRepository } from '../../../database/prisma/notification.repository';
import { CreateCategoryUseCase } from './create.category';
import { CreateCategoryController } from './create.category.controller';

const categoriesRepository = new PrismaRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createControllerCategory = new CreateCategoryController(
  createCategoryUseCase,
);
export { createControllerCategory };
