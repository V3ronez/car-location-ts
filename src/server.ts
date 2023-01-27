import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response, response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swagger.json';
import { routers } from './routes';
import { AppErrorGeneric } from './errors/AppErrorGeneric';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(routers);

const PORT = process.env.PORT || 8000;
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppErrorGeneric) {
      return response.status(err.statusCode).json({
        message: err.message,
        code: err.statusCode,
      });
    }
    return response.status(500).json({
      error: true,
      message: `Internal Error ${err.message}`,
    });
  },
);
app.listen(PORT, () => console.log(`server running in port ${PORT}  ⚡️`));
