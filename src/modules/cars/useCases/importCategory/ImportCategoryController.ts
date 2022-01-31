import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  handleRequest(request: Request, response: Response): Response {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    importCategoryUseCase.execute(file!);

    return response.send();
  }
}

export { ImportCategoryController };
