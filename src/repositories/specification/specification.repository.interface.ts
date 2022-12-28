import { SpecificationTDO } from '../../dtos/specification.body';
import { Specification } from '../../entities/specification';

export abstract class ISpecificationRepository {
  abstract create(specification: SpecificationTDO): Promise<void>;
  abstract findById(): Promise<Specification | null>;
  abstract findAll(): Promise<Specification[] | null>;
  abstract findByName(name: string): Promise<Specification | undefined>;
}
