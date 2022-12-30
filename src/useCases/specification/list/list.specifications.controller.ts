import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './list.specifications';

export class ListSpecificationController {
  constructor(private ListSpecificationsUseCase: ListSpecificationsUseCase) {}
  async handler(request: Request, response: Response): Promise<Response> {
    const findAll = await this.ListSpecificationsUseCase.execute();
    return response.json(findAll);
  }
}
