import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handleRequest(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handleRequest(request, response);
});

export { categoriesRoutes };
