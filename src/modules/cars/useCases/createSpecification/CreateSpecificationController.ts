import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

@injectable()
class CreateSpecificationController {
  async handleRequest(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
