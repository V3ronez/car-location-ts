import { Specification } from '@prisma/client';
import { SpecificationTDO } from '../../dtos/specification.body';
import { ISpecificationRepository } from '../../repositories/specification/specification.repository.interface';
import { prisma } from '../prismaConnect';

export class SpecificationPrismaRepository implements ISpecificationRepository {
  async create(specification: SpecificationTDO): Promise<void> {
    const { name, description } = specification;
    await prisma.specification.create({
      data: {
        name,
        description,
      },
    });
  }
  async findById(id: string): Promise<Specification | null> {
    const specification = await prisma.specification.findFirst({
      where: {
        id,
      },
    });

    if (!specification) {
      return null;
    }

    return specification;
  }

  async findAll(): Promise<Specification[] | null> {
    const allSpecification = await prisma.specification.findMany();

    if (!allSpecification) {
      return null;
    }
    return allSpecification;
  }

  async findByName(name: string): Promise<Specification | null> {
    const specification = await prisma.specification.findFirst({
      where: {
        name,
      },
    });

    if (!specification) {
      return null;
    }
    return specification;
  }
}
