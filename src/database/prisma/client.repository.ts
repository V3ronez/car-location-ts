import { Client, PrismaClient } from '@prisma/client';
import { ClientTDO } from '../../dtos/client.body';
import { IClientRepository } from '../../repositories/client/client.repository.interface';

export class ClientPrismaRepository implements IClientRepository {
  private prismaClient = new PrismaClient();

  async create(client: ClientTDO) {
    await this.prismaClient.client.create({
      data: {
        name: client.name,
        username: client.username,
        SSN: client.SSN,
        email: client.email,
        password: client.password,
        driver_license: client.driver_license,
      },
    });
  }

  async findAll(): Promise<Client[] | null> {
    const allClient = await this.prismaClient.client.findMany();
    if (!allClient) {
      return null;
    }
    return allClient;
  }

  async findById(id: string): Promise<Client | null> {
    const client = await this.prismaClient.client.findFirst({
      where: {
        id,
      },
    });
    if (!client) return null;
    return client;
  }

  async findByName(name: string): Promise<Client | null> {
    const client = await this.prismaClient.client.findFirst({
      where: {
        name,
      },
    });
    if (!client) return null;
    return client;
  }

  async findByEmail(email: string): Promise<Client> {
    const client = await this.prismaClient.client.findFirst({
      where: { email },
    });
    if (!client) return null;
    return client;
  }
}
