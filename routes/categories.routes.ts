import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.listCategories();

  return response.json({ allCategories });
});

export { categoriesRoutes };
