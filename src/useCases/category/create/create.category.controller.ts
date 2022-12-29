import { Request, Response } from 'express';
import { CreateCategory } from './create.category';

export class CreateCategoryController {
  constructor(private categoryCreateUseCase: CreateCategory) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.categoryCreateUseCase.execute({ name, description });
    return response.status(201).send();
  }
}
