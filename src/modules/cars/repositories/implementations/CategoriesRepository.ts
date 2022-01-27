import { Category } from '../../entities/Category';
import {
  ICreateCategoryDTO,
  ICategoriesRepository,
} from '../ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async createCategory({
    description,
    name,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async listCategories(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findCategoryByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name" LIMIT 1
    const category = await this.repository.findOne({ name });

    return category!;
  }
}

export { CategoriesRepository };
