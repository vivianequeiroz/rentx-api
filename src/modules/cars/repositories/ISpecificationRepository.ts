import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findSpecificationByName(name: string): Specification;
  listSpecifications(): Specification[];
  createSpecification({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
