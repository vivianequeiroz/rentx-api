import { CategoriesRepository } from '../repositories/categories.repository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    categoriesRepository.createCategory({ name, description });
  }
}

export { CreateCategoryService };
