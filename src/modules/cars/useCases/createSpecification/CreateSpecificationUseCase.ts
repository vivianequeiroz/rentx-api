import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findSpecificationByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    await this.specificationRepository.createSpecification({
      name,
      description,
    });
  }
}
export { CreateSpecificationUseCase };
