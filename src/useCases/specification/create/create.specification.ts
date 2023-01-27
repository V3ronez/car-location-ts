import { AppErrorGeneric } from '../../../errors/AppErrorGeneric';
import { ISpecificationRepository } from '../../../repositories/specification/specification.repository.interface';

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
      throw new AppErrorGeneric('Specification already exists', 400);
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
