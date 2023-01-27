import { ClientTDO } from '../../../dtos/client.body';
import { AppErrorGeneric } from '../../../errors/AppErrorGeneric';
import { clientMapper } from '../../../repositories/client/client.mapper';
import { IClientRepository } from '../../../repositories/client/client.repository.interface';
import { emailValidate } from '../../../utils/email.validate';

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: ClientTDO) {
    const userAlreadyExist = await this.clientRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExist) throw new AppErrorGeneric('User already exist', 400);

    const isValidEmail = emailValidate(data.email);
    if (!isValidEmail) throw new AppErrorGeneric('Email is not valid!', 400);

    const clientInsert = await clientMapper(data);
    this.clientRepository.create(clientInsert);
  }
}
