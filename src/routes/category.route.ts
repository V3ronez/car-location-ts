import { Router } from 'express';
import { createControllerCategory } from '../useCases/category/create';
import { listCategoriesController } from '../useCases/category/list';

const categoriesRouters = Router();

categoriesRouters.post('/', async (request, response) => {
  return await createControllerCategory.handle(request, response);
});

categoriesRouters.get('/', async (request, response) => {
  return await listCategoriesController.handle(request, response);
});

export { categoriesRouters };
