import { CategoriesRepository } from '../../../repositories/category/category.repository';
import { ImportCategoriesCSVUseCase } from './import.categories.csv';
import { ImportCategoriesCSVController } from './import.categories.csv.controller';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesCSVUseCase = new ImportCategoriesCSVUseCase(
  categoriesRepository,
);
const importCategoriesCSVController = new ImportCategoriesCSVController(
  importCategoriesCSVUseCase,
);

export { importCategoriesCSVController };
