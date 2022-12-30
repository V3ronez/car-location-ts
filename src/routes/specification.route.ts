import { Router } from 'express';
import { createSpecificationController } from '../useCases/specification/create';

const specificationsRouters = Router();

specificationsRouters.post('/', async (request, response) => {
  return createSpecificationController.handle(request, response);
});

// specificationsRouters.get('/', async (request, response) => {
//   const allSpecifications = await specificationRepository.findAll();
//   return res.status(200).json(allSpecifications);
// });

export { specificationsRouters };
