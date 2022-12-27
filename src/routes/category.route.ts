import { Router } from 'express';
import { CategoriesRepository } from '../repositories/category.repository';

const categoryRoute = Router();
const categoryRepository = new CategoriesRepository();

categoryRoute.post('/', async (req, res) => {
  const { name, description } = req.body;
  await categoryRepository.create({ name, description });
  return res.status(201).send();
});

categoryRoute.get('/', async (req, res) => {
  const categories = await categoryRepository.findAll();
  return res.status(200).json(categories);
});

export { categoryRoute };
