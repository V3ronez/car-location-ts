import { CategoryPrismaRepository } from '../../../database/prisma/category.repository';
import { CreateCategoryUseCase } from './create.category';
import { CreateCategoryController } from './create.category.controller';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoryPrismaRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createControllerCategory = new CreateCategoryController(
    createCategoryUseCase,
  );
  return createControllerCategory;
};

// const categoriesRepository = new PrismaRepository();
// const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
// const createControllerCategory = new CreateCategoryController(
//   createCategoryUseCase,
// );
// export { createControllerCategory };
