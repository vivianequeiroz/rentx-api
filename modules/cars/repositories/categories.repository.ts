import { Category } from '../model/Category';
import { ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  createCategory({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);
  }

  listCategories(): Category[] {
    return this.categories;
  }

  findCategoryByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
