import { Client, PrismaClient } from '@prisma/client';
import { ClientTDO } from '../../dtos/client.body';
import { clientMapper } from '../../repositories/client/client.mapper';
import { IClientRepository } from '../../repositories/client/client.repository.interface';

export class ClientPrismaRepository implements IClientRepository {
  private prismaClient = new PrismaClient();
  constructor() {
    this.prismaClient.$connect;
  }
  async create(client: ClientTDO) {
    const clientInsert = clientMapper(client);
    await this.prismaClient.client.create({
      data: clientInsert,
    });
  }

  async findAll(): Promise<Client[] | null> {
    const allClient = await this.prismaClient.client.findMany();
    if (!allClient) {
      return null;
    }
    return allClient;
  }

  findById() {
    throw new Error('Method not implemented.');
  }
  findByName() {
    throw new Error('Method not implemented.');
  }
}
