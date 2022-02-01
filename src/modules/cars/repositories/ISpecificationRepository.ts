import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findSpecificationByName(name: string): Promise<Specification>;
  // listSpecifications(): Specification[];
  createSpecification({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<void>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
