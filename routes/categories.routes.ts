import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories.repository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.createCategory({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.listCategories();

  return response.json({ allCategories });
});

export { categoriesRoutes };
