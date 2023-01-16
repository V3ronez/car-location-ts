import { ClientTDO } from '../../../dtos/client.body';
import { clientMapper } from '../../../repositories/client/client.mapper';
import { IClientRepository } from '../../../repositories/client/client.repository.interface';

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: ClientTDO) {
    const userAlreadyExist = await this.clientRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExist) throw new Error('User already exist');

    const clientInsert = await clientMapper(data);

    await this.clientRepository.create(clientInsert);
  }
}
