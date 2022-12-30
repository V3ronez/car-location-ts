import { SpecificationExistsError } from '../../repositories/specification/errors/specification.unique.name';
import { ISpecificationRepository } from '../../repositories/specification/specification.repository.interface';

interface CreateSpecificationProps {
  name: string;
  description: string;
}
export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  async execute({
    name,
    description,
  }: CreateSpecificationProps): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new SpecificationExistsError();
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
