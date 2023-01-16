import { Specification } from '@prisma/client';
import { SpecificationTDO } from '../../dtos/specification.body';

export abstract class ISpecificationRepository {
  abstract create(specification: SpecificationTDO): Promise<void>;
  abstract findById(id: string): Promise<Specification | null>;
  abstract findAll(): Promise<Specification[] | null>;
  abstract findByName(name: string): Promise<Specification | null>;
}
