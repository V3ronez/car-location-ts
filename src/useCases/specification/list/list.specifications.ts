import { Specification } from '../../../entities/Specification';
import { ISpecificationRepository } from '../../../repositories/specification/specification.repository.interface';

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  async execute(): Promise<Specification[] | null> {
    const allSpecification = await this.specificationsRepository.findAll();
    return allSpecification;
  }
}
