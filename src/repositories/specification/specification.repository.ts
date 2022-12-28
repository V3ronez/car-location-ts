import { SpecificationTDO } from '../../dtos/specification.body';
import { Specification } from '../../entities/specification';
import { ISpecificationRepository } from './specification.repository.interface';

export class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  async create(specificationBody: SpecificationTDO): Promise<void> {
    const specification = new Specification({
      name: specificationBody.name,
      description: specificationBody.description,
      created_at: new Date(),
    });
    await this.specifications.push(specification);
  }

  findById(): Promise<Specification | null> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<Specification[] | null> {
    return await this.specifications;
  }
  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.specifications.find(
      (specification) => specification.name == name,
    );
    return specification;
  }
}
