import { Request, Response } from 'express';

class ImportCategoryController {
  handleRequest(request: Request, response: Response): Response {
    const { file } = request;

    console.log(file);

    return response.send();
  }
}

export { ImportCategoryController };
