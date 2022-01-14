import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories.repository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { PostgressCategoriesRepository } from '../services/PostgressCategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new PostgressCategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.listCategories();

  return response.json({ allCategories });
});

export { categoriesRoutes };
