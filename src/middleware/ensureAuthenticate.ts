import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ClientPrismaRepository } from '../database/prisma/client.repository';
import { AppErrorGeneric } from '../errors/AppErrorGeneric';

//change function return
type IPayloadReturn = {
  sub: string;
};

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const headerToken = request.headers.authorization;

  if (!headerToken) throw new AppErrorGeneric('header is necessary', 400);
  const [, token] = headerToken.split(' ');
  try {
    const { sub: clientId } = verify(
      token,
      process.env.SECRET_KEY,
    ) as IPayloadReturn;

    const clientRepository = new ClientPrismaRepository();
    const client = await clientRepository.findById(clientId);

    if (!client) throw new AppErrorGeneric('Client not exist', 400);
    next();
  } catch (error) {
    throw new AppErrorGeneric('Invalid token', 401);
  }
}
