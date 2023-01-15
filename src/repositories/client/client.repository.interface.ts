import { ClientTDO } from '../../dtos/client.body';

export abstract class IClientRepository {
  abstract create(client: ClientTDO);
  abstract findAll();
  abstract findById();
  abstract findByName();
}
