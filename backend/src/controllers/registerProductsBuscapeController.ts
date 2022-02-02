import { Request, Response, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { registerProductsBuscapeService } from '../services/registerProductsBuscapeService';

const registerProductsBuscapeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      category,
      input,
    }: ParsedQs | string | undefined | ParsedQs[] | string[] | undefined | any =
      req.query;
    const products = await registerProductsBuscapeService(category, input);
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

export { registerProductsBuscapeController };
