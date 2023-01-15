import { CategoryPrismaRepository } from '../../../database/prisma/category.repository';
import { ImportCategoriesCSVUseCase } from './import.categories.csv';
import { ImportCategoriesCSVController } from './import.categories.csv.controller';

export default (): ImportCategoriesCSVController => {
  const categoriesRepository = new CategoryPrismaRepository();
  const importCategoriesCSVUseCase = new ImportCategoriesCSVUseCase(
    categoriesRepository,
  );
  const importCategoriesCSVController = new ImportCategoriesCSVController(
    importCategoriesCSVUseCase,
  );
  return importCategoriesCSVController;
};
