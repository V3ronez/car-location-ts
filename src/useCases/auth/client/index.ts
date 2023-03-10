import { ClientPrismaRepository } from '../../../database/prisma/client.repository';
import { AuthClientController } from './auth.client.controller';
import { AuthClientUseCase } from './auth.client';

export default (): AuthClientController => {
  const clientRepository = new ClientPrismaRepository();
  const authClientUseCase = new AuthClientUseCase(clientRepository);
  const authClientController = new AuthClientController(authClientUseCase);

  return authClientController;
};
