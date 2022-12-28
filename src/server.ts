import express from 'express';
import { categoriesRouters } from './routes/category.route';
import { specificationsRouters } from './routes/specification.route';
const app = express();

app.use(express.json());
app.use('/category', categoriesRouters);
app.use('/specification', specificationsRouters);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running in port ${PORT}  ⚡️`));
