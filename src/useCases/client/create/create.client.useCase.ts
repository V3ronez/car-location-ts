import { ClientTDO } from '../../../dtos/client.body';
import { clientMapper } from '../../../repositories/client/client.mapper';
import { IClientRepository } from '../../../repositories/client/client.repository.interface';

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: ClientTDO) {
    const clientInsert = clientMapper(data);
    await this.clientRepository.create(clientInsert);
  }
}
