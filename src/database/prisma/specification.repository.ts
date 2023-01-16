import { PrismaClient, Specification } from '@prisma/client';
import { SpecificationTDO } from '../../dtos/specification.body';
import { ISpecificationRepository } from '../../repositories/specification/specification.repository.interface';

export class SpecificationPrismaRepository implements ISpecificationRepository {
  private prismaClient = new PrismaClient();
  constructor() {
    this.prismaClient.$connect;
  }
  async create(specification: SpecificationTDO): Promise<void> {
    const { name, description } = specification;
    await this.prismaClient.specification.create({
      data: {
        name,
        description,
      },
    });
    this.prismaClient.$disconnect;
  }
  async findById(id: string): Promise<Specification | null> {
    const specification = await this.prismaClient.specification.findFirst({
      where: {
        id,
      },
    });
    this.prismaClient.$disconnect;

    if (!specification) {
      return null;
    }

    return specification;
  }

  async findAll(): Promise<Specification[] | null> {
    const allSpecification = await this.prismaClient.specification.findMany();
    this.prismaClient.$disconnect;

    if (!allSpecification) {
      return null;
    }
    return allSpecification;
  }

  async findByName(name: string): Promise<Specification | null> {
    const specification = await this.prismaClient.specification.findFirst({
      where: {
        name,
      },
    });
    this.prismaClient.$disconnect;

    if (!specification) {
      return null;
    }
    return specification;
  }
}
