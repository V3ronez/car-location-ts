import { ClientTDO } from '../../../dtos/client.body';
import { clientMapper } from '../../../repositories/client/client.mapper';
import { IClientRepository } from '../../../repositories/client/client.repository.interface';
import { emailValidate } from '../../../utils/email.validate';

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: ClientTDO) {
    const userAlreadyExist = await this.clientRepository.findByEmail(
      data.email,
    );
    if (userAlreadyExist) throw new Error('User already exist');

    const isValidEmail = emailValidate(data.email);
    if (!isValidEmail) throw new Error('Email is no valid!');

    const clientInsert = await clientMapper(data);
    await this.clientRepository.create(clientInsert);
  }
}
