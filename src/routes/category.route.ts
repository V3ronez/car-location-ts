import { Router } from 'express';
import { CategoriesRepository } from '../repositories/category.repository';
import { CreateCategory } from '../useCases/category/create.category';

const categoryRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoryRoute.post('/', async (req, res) => {
  const { name, description } = req.body;
  const categoryCreate = new CreateCategory(categoriesRepository);
  categoryCreate.execute({ name, description });
  return res.status(201).send();
});

categoryRoute.get('/', async (req, res) => {
  const categories = await categoriesRepository.findAll();
  return res.status(200).json(categories);
});

export { categoryRoute };
