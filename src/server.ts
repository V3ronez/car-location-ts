import express from 'express';
import { categoryRoute } from './routes/category.route';
const app = express();

app.use(express.json());
app.use('/category', categoryRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`⚡️ server running in port ${PORT} ⚡️`));
