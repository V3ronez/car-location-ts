import { IClientRepository } from '../../../repositories/client/client.repository.interface';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppErrorGeneric } from '../../../errors/AppErrorGeneric';

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
  async handle({ email, password }: IAuthRequest): Promise<ITokenReturn> {
    const user = await this.repository.findByEmail(email);

    if (!user) throw new AppErrorGeneric('Email or password incorrect', 4041);

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch)
      throw new AppErrorGeneric('Email or password incorrect', 401);

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
