import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.listCategories();

    return categories;
  }
}

export { ListCategoriesUseCase };
