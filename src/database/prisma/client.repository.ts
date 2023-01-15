import { PrismaClient } from '@prisma/client';
import { ClientTDO } from '../../dtos/client.body';
import { clientMapper } from '../../repositories/client/client.mapper';
import { IClientRepository } from '../../repositories/client/client.repository.interface';

export class ClientRepositoryPrisma implements IClientRepository {
  private prismaClient: PrismaClient;
  constructor() {
    this.prismaClient.$connect;
  }
  async create(client: ClientTDO) {
    const clientInsert = clientMapper(client);
    await this.prismaClient.client.create({
      data: clientInsert,
    });
  }

  findAll() {
    throw new Error('Method not implemented.');
  }
  findById() {
    throw new Error('Method not implemented.');
  }
  findByName() {
    throw new Error('Method not implemented.');
  }
}
