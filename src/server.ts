import express from 'express';
import { routers } from './routes';

const app = express();

app.use(express.json());
app.use(routers);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running in port ${PORT}  ⚡️`));
