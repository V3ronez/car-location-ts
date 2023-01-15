import { Router } from 'express';
import CreateClientController from '../useCases/client/create/';

const clientRouters = Router();

clientRouters.post('/', async (request, response) => {
  return await CreateClientController().handle(request, response);
});
export { clientRouters };
