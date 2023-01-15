import multer from 'multer';
import { Router } from 'express';
import createControllerCategory from '../useCases/category/create';
import listCategoriesController from '../useCases/category/list';
import importCategoriesCSVController from '../useCases/category/import-csv';

const categoriesRouters = Router();
const upload = multer({
  dest: './temp',
});

categoriesRouters.post('/', (request, response) => {
  return createControllerCategory().handle(request, response);
});

categoriesRouters.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    return await importCategoriesCSVController().handle(request, response);
  },
);

categoriesRouters.get('/', async (request, response) => {
  return await listCategoriesController().handle(request, response);
});

export { categoriesRouters };
