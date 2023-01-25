import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ClientPrismaRepository } from '../database/prisma/client.repository';

//chance function return
type IPayloadReturn = {
  sub: string;
};
export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const headerToken = request.headers.authorization;

  if (!headerToken) throw new Error('header is necessary');
  const [, token] = headerToken.split(' ');
  try {
    const { sub: clientId } = verify(
      token,
      process.env.SECRET_KEY,
    ) as IPayloadReturn;

    const clientRepository = new ClientPrismaRepository();
    const client = await clientRepository.findById(clientId);

    if (!client) throw new Error('Client not exist');
    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
}
