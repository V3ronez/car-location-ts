import { SpecificationPrismaRepository } from '../../../database/prisma/specification.repository';
import { CreateSpecificationUseCase } from './create.specification';
import { CreateSpecificationController } from './create.specification.controller';

export default (): CreateSpecificationController => {
  const specificationsRepository = new SpecificationPrismaRepository();
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository,
  );
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
  );
  return createSpecificationController;
};
