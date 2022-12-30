import { SpecificationsRepository } from '../../repositories/specification/specification.repository';
import { CreateSpecificationUseCase } from './create.specification';
import { CreateSpecificationController } from './create.specification.controller';

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
