import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './create.specification';

export class CreateSpecificationController {
  constructor(private specificationUseCaseCreate: CreateSpecificationUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.specificationUseCaseCreate.execute({ name, description });
    return response.status(201).send();
  }
}
