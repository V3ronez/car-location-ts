import { SpecificationTDO } from '../../dtos/specification.body';

export abstract class ISpecificationRepository {
  abstract create(specification: SpecificationTDO): Promise<void>;
  abstract findById();
  abstract findAll();
  abstract findByName(name: string);
}
