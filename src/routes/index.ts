import { Router } from 'express';
import { categoriesRouters } from './category.routes';
import { specificationsRouters } from './specification.routes';

const routers = Router();

routers.use('/category', categoriesRouters);
routers.use('/specification', specificationsRouters);

export { routers };
