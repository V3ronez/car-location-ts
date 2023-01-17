import { IClientRepository } from '../../../repositories/client/client.repository.interface';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export interface IAuthRequest {
  email: string;
  password: string;
}
export interface ITokenReturn {
  client: {
    name: string;
    email: string;
  };
  token: string;
}

export class AuthClientUseCase {
  constructor(private repository: IClientRepository) {}
  async handle({ email, password }: IAuthRequest) {
    const user = await this.repository.findByEmail(email);
    if (!user) throw new Error('Email or password invalid');

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error('Email or password invalid');

    const secretKey = process.env.SECRET_KEY ?? 'sshhh';
    const token = sign({ name: user.name }, secretKey, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      client: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
