import { Client } from '@prisma/client';
import { ClientTDO } from '../../dtos/client.body';

export abstract class IClientRepository {
  abstract create(client: ClientTDO): Promise<void>;
  abstract findAll(): Promise<Client[] | null>;
  abstract findById(id: string): Promise<Client | null>;
  abstract findByName(name: string): Promise<Client | null>;
}
