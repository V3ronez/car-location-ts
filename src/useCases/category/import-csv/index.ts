import { ImportCategoriesCSVUseCase } from './import.categories.csv';
import { ImportCategoriesCSVController } from './import.categories.csv.controller';

const importCategoriesCSVUseCase = new ImportCategoriesCSVUseCase();
const importCategoriesCSVController = new ImportCategoriesCSVController(
  importCategoriesCSVUseCase,
);

export { importCategoriesCSVController };
