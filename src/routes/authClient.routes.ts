import { Router } from 'express';
import authClientController from '../useCases/auth/client';

const authClientRouter = Router();

authClientRouter.post('/', (request, response) => {
  return authClientController().execute(request, response);
});

export { authClientRouter };
