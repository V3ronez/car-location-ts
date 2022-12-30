import { Router } from 'express';
import { createControllerCategory } from '../useCases/category/create';
import { CreateSpecificationController } from '../useCases/specification/create.specification.controller';

const specificationsRouters = Router();

specificationsRouters.post('/', async (request, response) => {
  return createControllerCategory.handle(request, response);
});

// specificationsRouters.get('/', async (request, response) => {
//   const allSpecifications = await specificationRepository.findAll();
//   return res.status(200).json(allSpecifications);
// });

export { specificationsRouters };
