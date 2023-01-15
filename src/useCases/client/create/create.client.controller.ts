import { Request, Response } from 'express';
import { ClientTDO } from '../../../dtos/client.body';
import { CreateClientUseCase } from './create.client.useCase';

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async handle(request: Request, response: Response) {
    const { name, username, password, email, SSN, driver_license }: ClientTDO =
      request.body;

    try {
      await this.createClientUseCase.execute({
        name,
        username,
        password,
        email,
        SSN,
        driver_license,
      });
    } catch (err) {
      return response
        .status(400)
        .json({ 'Error in insert this attr': err.meta.target });
    }
    return response.status(201).send();
  }
}
