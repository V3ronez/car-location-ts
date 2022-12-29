import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './list.categories';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCase.execute();
    return response.json(categories);
  }
}
