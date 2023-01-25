import { Router } from 'express';
import { authClientRouter } from './authClient.routes';
import { categoriesRouters } from './category.routes';
import { clientRouters } from './client.routes';
import { specificationsRouters } from './specification.routes';

const routers = Router();

routers.use('/category', categoriesRouters);
routers.use('/specification', specificationsRouters);
routers.use('/client', clientRouters);
routers.use('/auth', authClientRouter);

export { routers };
