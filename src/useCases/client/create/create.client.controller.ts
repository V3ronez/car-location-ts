import { Request, Response } from 'express';
import { ClientTDO } from '../../../dtos/client.body';
import { CreateClientUseCase } from './create.client.useCase';

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async handle(request: Request, response: Response) {
    const {
      name,
      username,
      avatar,
      password,
      email,
      SSN,
      driver_license,
    }: ClientTDO = request.body;

    await this.createClientUseCase.execute({
      name,
      avatar,
      username,
      password,
      email,
      SSN,
      driver_license,
    });

    return response.status(201).send();
  }
}
