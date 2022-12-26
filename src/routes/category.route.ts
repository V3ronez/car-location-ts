import { Router } from 'express';
import { Category } from '../entities/Category';

const categoryRoute = Router();

const categories = [];

categoryRoute.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category({
    name,
    description,
    created_at: new Date(),
  });
  categories.push(category);

  return res.status(201).json({ category });
});

export { categoryRoute };
