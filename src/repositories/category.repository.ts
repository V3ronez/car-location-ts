import { Category } from '../entities/Category';

export class CategoriesRepository {
  constructor(private categories: Category[]) {}
}
