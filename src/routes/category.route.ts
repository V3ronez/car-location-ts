import { Router } from 'express';
import { createControllerCategory } from '../useCases/category/create';

const categoriesRouters = Router();

categoriesRouters.post('/', async (request, response) => {
  return await createControllerCategory.handle(request, response);
});

// categoriesRouters.get('/', async (request, response) => {});

export { categoriesRouters };
