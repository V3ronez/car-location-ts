import { Request, Response } from 'express';
import { ImportCategoriesCSVUseCase } from './import.categories.csv';

export class ImportCategoriesCSVController {
  constructor(private importCategoriesCSVUseCase: ImportCategoriesCSVUseCase) {}
  async handle(request: Request, response: Response) {
    const { file } = request;
    await this.importCategoriesCSVUseCase.execute(file);
    return response.send();
  }
}
