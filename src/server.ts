import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swagger.json';
import { routers } from './routes';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(routers);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running in port ${PORT}  ⚡️`));
