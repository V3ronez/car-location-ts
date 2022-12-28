import { Router } from 'express';
import { SpecificationsRepository } from '../repositories/specification/specification.repository';
import { CreateSpecification } from '../useCases/specification/create.specification';

const specificationsRouters = Router();

specificationsRouters.post('/', async (req, res) => {
  const { name, description } = req.body;
  const specificationRepository = new SpecificationsRepository();
  const specificationCreate = new CreateSpecification(specificationRepository);

  await specificationCreate.execute({ name, description });
  return res.status(201).send();
});

specificationsRouters.get('/', async (req, res) => {
  const specificationRepository = new SpecificationsRepository();
  const allSpecifications = await specificationRepository.findAll();
  return res.status(200).json(allSpecifications);
});

export { specificationsRouters };
