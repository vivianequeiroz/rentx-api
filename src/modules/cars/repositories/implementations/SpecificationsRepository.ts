import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }
  findSpecificationByName(name: string): Promise<Specification> {
    throw new Error('Method not implemented.');
  }

  async createSpecification({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  // listSpecifications(): Specification[] {
  //   throw new Error('Method not implemented.');
  // }

  async async(name: string): Promise<Specification> {
    const specificationFound = await this.repository.findOne({ name });

    return specificationFound!;
  }
}

export { SpecificationsRepository };
