import { NextFunction, Request, Response } from 'express';

const registerProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await registerProductModel(req.body);
  } catch (error) {
    next(error);
  }
};

export { registerProductController };
