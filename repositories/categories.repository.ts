import { Category } from '../model/Category';

//DTO => Data Transfer Object, responsible to transited with data across the layers of the app
// The routes do not need to be aware of the models classes types

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

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
}

export { CategoriesRepository };
