import { SpecificationsRepository } from '../../../repositories/specification/specification.repository';
import { ListSpecificationsUseCase } from './list.specifications';
import { ListSpecificationController } from './list.specifications.controller';

const specificationsRepository = SpecificationsRepository.getInstance();
const specificationUseCaseCreate = new ListSpecificationsUseCase(
  specificationsRepository,
);
const listSpecificationController = new ListSpecificationController(
  specificationUseCaseCreate,
);

export { listSpecificationController };
