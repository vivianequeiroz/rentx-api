import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

@injectable()
class CreateSpecificationController {
  handleRequest(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
