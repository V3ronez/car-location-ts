import { Request, Response } from 'express';
import { AuthClientUseCase, ITokenReturn } from './auth.client';

export class AuthClientController {
  constructor(private authClientUserCase: AuthClientUseCase) {}
  async execute(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticate = await this.authClientUserCase.handle({
      email,
      password,
    });
    return response.json(authenticate);
  }
}
