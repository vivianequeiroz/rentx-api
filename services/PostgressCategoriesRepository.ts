import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgressCategoriesRepository implements ICategoriesRepository {
  findCategoryByName(name: string): Category {
    console.log(name);
    return null;
  }
  listCategories(): Category[] {
    return null;
  }
  createCategory({ name, description }: ICreateCategoryDTO): null {
    console.log(name, description);
    return null;
  }
}

export { PostgressCategoriesRepository };
