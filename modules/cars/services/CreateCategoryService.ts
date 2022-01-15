import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.createCategory({ name, description });
  }
}

export { CreateCategoryService };
