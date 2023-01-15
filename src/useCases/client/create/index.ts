import { ClientPrismaRepository } from '../../../database/prisma/client.repository';
import { CreateClientUseCase } from './create.client.useCase';
import { CreateClientController } from './create.client.controller';

export default (): CreateClientController => {
  const clientRepository = new ClientPrismaRepository();
  const createClientUseCase = new CreateClientUseCase(clientRepository);
  const createClientController = new CreateClientController(
    createClientUseCase,
  );
  return createClientController;
};
