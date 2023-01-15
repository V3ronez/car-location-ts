import { SpecificationPrismaRepository } from '../../../database/prisma/specification.repository';
import { ListSpecificationsUseCase } from './list.specifications';
import { ListSpecificationController } from './list.specifications.controller';

export default (): ListSpecificationController => {
  const specificationsRepository = new SpecificationPrismaRepository();
  const specificationUseCaseCreate = new ListSpecificationsUseCase(
    specificationsRepository,
  );
  const listSpecificationController = new ListSpecificationController(
    specificationUseCaseCreate,
  );

  return listSpecificationController;
};
