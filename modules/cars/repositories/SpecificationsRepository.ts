import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './ISpecificationRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  createSpecification({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  listSpecifications(): Specification[] {
    throw new Error('Method not implemented.');
  }

  findSpecificationByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationsRepository };
