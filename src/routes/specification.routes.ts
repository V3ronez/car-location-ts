import { Router } from 'express';
import { createSpecificationController } from '../useCases/specification/create';
import { listSpecificationController } from '../useCases/specification/list';

const specificationsRouters = Router();

specificationsRouters.post('/', async (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRouters.get('/', async (request, response) => {
  return listSpecificationController.handler(request, response);
});

export { specificationsRouters };
